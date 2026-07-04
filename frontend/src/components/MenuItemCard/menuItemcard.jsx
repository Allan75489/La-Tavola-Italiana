import { motion } from 'framer-motion'
import AllergenIcons from '../AllergenIcons/AllergenIcons'
import { formatCurrency } from '../../utils/formatCurrency'
import { useCart } from '../../context/CartContext'
import styles from './MenuItemCard.module.css'

export default function MenuItemCard({ item, index = 0 }) {
  const { addItem } = useCart()

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.name} loading="lazy" />
        <span className={styles.category}>{item.category}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.headRow}>
          <h3 className={styles.name}>{item.name}</h3>
          <span className={styles.price}>{formatCurrency(item.price)}</span>
        </div>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.footerRow}>
          <AllergenIcons allergens={item.allergens} />
          <button className={styles.addBtn} onClick={() => addItem(item)}>
            Adicionar
          </button>
        </div>
      </div>
    </motion.article>
  )
}
