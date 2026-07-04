import Button from '../../components/Button/Button'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <span className={styles.code}>404</span>
      <h1>Questa tavola non esiste</h1>
      <p>A página que você procura não foi encontrada — talvez tenha sido movida para outra mesa.</p>
      <Button to="/" variant="primary">Voltar para o Início</Button>
    </div>
  )
}
