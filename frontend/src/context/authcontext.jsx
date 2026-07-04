import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// Contexto de autenticação — MOCKADO.
// Nenhuma autenticação real é feita aqui, conforme escopo do projeto.
// Quando o backend FastAPI existir, `login` deve chamar POST /auth/login
// e armazenar o token retornado.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login({ email }) {
    // Mock: simula sucesso de login sem validar credenciais no backend
    setUser({ name: email.split('@')[0], email })
    return Promise.resolve({ success: true })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  return ctx
}
