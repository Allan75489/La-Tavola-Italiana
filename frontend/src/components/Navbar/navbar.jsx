import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { useCart } from '../../context/CartContext'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/nossa-historia', label: 'Nossa História' },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/delivery', label: 'Delivery' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/contato', label: 'Contato' }
]

export default function Navbar() {
  const scrolled = useScrollPosition(40)
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          Trattoria
          <span>della Famiglia</span>
        </NavLink>

        <nav className={styles.links}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <NavLink to="/delivery" className={styles.cartBtn} aria-label="Carrinho de delivery">
            🛒
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </NavLink>
          <button
            className={styles.hamburger}
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
