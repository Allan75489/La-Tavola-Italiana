import menuData from '../data/menu.json'
import drinksData from '../data/drinks.json'
import api from './api'

// Camada de serviço do Cardápio.
// Hoje resolve com os dados mockados em /src/data.
// Quando o endpoint FastAPI existir, troque o corpo das funções por:
//   const { data } = await api.get('/menu')
//   return data
// A assinatura das funções (Promise<Array>) já é compatível com essa migração.

export async function getMenuItems() {
  return Promise.resolve(menuData)
  // Futuro: const { data } = await api.get('/menu'); return data
}

export async function getDrinks() {
  return Promise.resolve(drinksData)
  // Futuro: const { data } = await api.get('/drinks'); return data
}

export async function getMenuCategories() {
  const categories = [...new Set(menuData.map((item) => item.category))]
  return Promise.resolve(categories)
}

// Placeholder para envio de reserva — futura integração com POST /reservations
export async function createReservation(payload) {
  console.info('[mock] Reserva recebida, pronta para envio à API:', payload)
  return Promise.resolve({ success: true, id: Date.now(), ...payload })
  // Futuro: const { data } = await api.post('/reservations', payload); return data
}

// Placeholder para envio de pedido de delivery — futura integração com POST /orders
export async function createOrder(payload) {
  console.info('[mock] Pedido de delivery pronto para envio à API:', payload)
  return Promise.resolve({ success: true, id: Date.now(), ...payload })
  // Futuro: const { data } = await api.post('/orders', payload); return data
}
