import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  to,
  full = false,
  type = 'button',
  onClick,
  ...rest
}) {
  const className = `${styles.btn} ${styles[variant]} ${full ? styles.full : ''}`

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
