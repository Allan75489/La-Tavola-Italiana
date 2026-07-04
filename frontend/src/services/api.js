import axios from 'axios'

// Instância central do Axios.
// Quando o backend em FastAPI estiver disponível, basta apontar
// VITE_API_URL para a URL real (ex: http://localhost:8000/api)
// em um arquivo .env na raiz do projeto.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor de request: futuramente injeta o token JWT do usuário logado
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('trattoria_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor de response: tratamento centralizado de erros da API
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API ERROR]', error?.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api
