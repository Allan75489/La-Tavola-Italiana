import { useEffect, useMemo, useState } from 'react'
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard'
import { getDrinks, getMenuItems } from '../../services/menuService'
import styles from './Menu.module.css'

const CATEGORY_ORDER = [
  'Pane', 'Salumi', 'Formaggi', 'Antipasti', 'Primi Piatti',
  'Molhos', 'Secondi', 'Contorni', 'Dolci', 'Bebidas'
]

export default function Menu() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  useEffect(() => {
    async function load() {
      const [food, drinks] = await Promise.all([getMenuItems(), getDrinks()])
      setItems([...food, ...drinks])
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [items, search, activeCategory])

  const grouped = useMemo(() => {
    return CATEGORY_ORDER
      .map((cat) => ({ category: cat, items: filtered.filter((i) => i.category === cat) }))
      .filter((group) => group.items.length > 0)
  }, [filtered])

  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Il Nostro Menù</h1>
          <p>Um convite à mesa da tradição italiana, categoria por categoria.</p>
        </div>
      </section>

      <div className={styles.toolbar}>
        <div className={`container ${styles.toolbarInner}`}>
          <input
            className={styles.search}
            type="search"
            placeholder="Buscar prato ou bebida..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar no cardápio"
          />
          <div className={styles.filters}>
            {['Todos', ...CATEGORY_ORDER].map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          {grouped.length === 0 && (
            <p className={styles.empty}>Nessun piatto trovato — tente outra busca.</p>
          )}
          {grouped.map((group) => (
            <div key={group.category}>
              <h2 className={styles.categoryHeading}>{group.category}</h2>
              <div className={styles.grid}>
                {group.items.map((item, i) => (
                  <MenuItemCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
