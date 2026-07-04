import { useEffect, useMemo, useState } from 'react'
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard'
import Button from '../../components/Button/Button'
import { useCart } from '../../context/CartContext'
import { getDrinks, getMenuItems, createOrder } from '../../services/menuService'
import { formatCurrency } from '../../utils/formatcurrency'
import styles from './Delivery.module.css'

export default function Delivery() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced] = useState(false)
  const { items: cartItems, total, increment, decrement, removeItem, clearCart } = useCart()

  useEffect(() => {
    async function load() {
      const [food, drinks] = await Promise.all([getMenuItems(), getDrinks()])
      setItems([...food, ...drinks])
    }
    load()
  }, [])

  const categories = useMemo(() => ['Todos', ...new Set(items.map((i) => i.category))], [items])

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'Todos' || item.category === category
      return matchesSearch && matchesCategory
    })
  }, [items, search, category])

  async function handleCheckout() {
    setPlacing(true)
    try {
      await createOrder({ items: cartItems, total })
      setPlaced(true)
      clearCart()
    } finally {
      setPlacing(false)
    }
  }

  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Delivery</h1>
          <p>A trattoria até a sua porta — monte seu pedido abaixo.</p>
        </div>
      </section>

      <section className="container">
        <div className={styles.layout}>
          <div className={styles.main}>
            <div className={styles.toolbar}>
              <input
                className={styles.search}
                type="search"
                placeholder="Buscar item..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${category === cat ? styles.active : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.map((item, i) => (
                <MenuItemCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          <aside className={styles.cart}>
            <h3>Seu Pedido</h3>

            {placed && (
              <p className={styles.cartEmpty}>
                Pedido finalizado! Ordine ricevuto — em breve chegará até você. 🍝
              </p>
            )}

            {!placed && cartItems.length === 0 && (
              <p className={styles.cartEmpty}>Seu carrinho está vazio.</p>
            )}

            {!placed && cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <span className={styles.cartItemName}>{item.name}</span>
                <div className={styles.qtyControls}>
                  <button onClick={() => decrement(item.id)} aria-label="Diminuir quantidade">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)} aria-label="Aumentar quantidade">+</button>
                </div>
                <span>{formatCurrency(item.price * item.quantity)}</span>
                <button onClick={() => removeItem(item.id)} aria-label="Remover item">✕</button>
              </div>
            ))}

            {!placed && cartItems.length > 0 && (
              <>
                <div className={styles.cartTotal}>
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <Button variant="primary" full onClick={handleCheckout} disabled={placing}>
                  {placing ? 'Enviando...' : 'Finalizar Pedido'}
                </Button>
              </>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
