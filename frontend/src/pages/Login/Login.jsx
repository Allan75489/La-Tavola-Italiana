import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useAuth } from '../../context/AuthContext'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      setError('Preencha e-mail e senha para continuar.')
      return
    }
    setError('')
    await login({ email })
    navigate('/')
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h1>Bentornati</h1>
        <p>Entre para acompanhar suas reservas e pedidos.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && <span className={styles.error}>{error}</span>}
          <Button type="submit" variant="primary" full>Entrar</Button>
        </form>

        <p className={styles.note}>
          Este login é uma simulação de interface. A autenticação real será
          implementada junto ao backend em FastAPI.
        </p>
      </div>
    </div>
  )
}
