import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
              Trattoria
              <span>della Famiglia</span>
            </div>
            <p className={styles.about}>
              "La cucina è un atto d'amore." Tradição italiana servida com paixão desde 1978.
            </p>
            <div className={styles.social}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
            </div>
          </div>

          <div>
            <div className={styles.heading}>Navegação</div>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nossa-historia">Nossa História</Link></li>
              <li><Link to="/cardapio">Cardápio</Link></li>
              <li><Link to="/reservas">Reservas</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Serviços</div>
            <ul className={styles.links}>
              <li><Link to="/delivery">Delivery</Link></li>
              <li><Link to="/galeria">Galeria</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/login">Minha Conta</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Contato</div>
            <ul className={styles.links}>
              <li>Via Roma, 245 — São Paulo, SP</li>
              <li>(11) 4002-8922</li>
              <li>contato@trattoriadellafamiglia.com.br</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Trattoria della Famiglia. Todos os direitos reservados.</span>
          <span>Feito com tradição italiana e código limpo.</span>
        </div>
      </div>
    </footer>
  )
}
