import styles from './SectionTitle.module.css'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.wrap} ${styles[align]}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className="section-divider">
        <span className="line" />
        <span className="wax-seal">
          <svg viewBox="0 0 24 24"><path d="M12 2 L14 9 L21 9 L15.5 13.2 L17.5 20 L12 16 L6.5 20 L8.5 13.2 L3 9 L10 9 Z" /></svg>
        </span>
        <span className="line right" />
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
