# Trattoria della Famiglia — Frontend

Frontend completo em **React + Vite** para um restaurante italiano de alto padrão.
Este projeto cobre **apenas o frontend**; o backend (FastAPI + MySQL) será desenvolvido
posteriormente e consumido via API REST.

## Stack

- React 18 + Vite
- React Router DOM (roteamento)
- Axios (cliente HTTP, já configurado em `src/services/api.js`)
- Context API (`CartContext`, `AuthContext`)
- CSS Modules (um arquivo `.module.css` por componente/página)
- Framer Motion (animações: fade, slide, scale, hover, scroll reveal)

## Como rodar

```bash
npm install
npm run dev
```

O projeto sobe em `http://localhost:5173`.

Para build de produção:

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
src/
  assets/        arquivos estáticos
  components/    componentes reutilizáveis (Navbar, Footer, Button, cards...)
  pages/         uma pasta por página, com .jsx + .module.css
  layouts/       MainLayout (Navbar + conteúdo + Footer)
  routes/        definição centralizada das rotas
  hooks/         hooks customizados (ex: useScrollPosition)
  context/       Context API (carrinho, autenticação mockada)
  services/      camada de acesso a dados (hoje lê JSON mockado, amanhã chama a API)
  styles/        variáveis de design (cores, tipografia, espaçamento) e reset global
  utils/         funções utilitárias (ex: formatCurrency)
  data/          JSON mockado: menu.json, drinks.json, gallery.json
```

## Páginas

Home · Nossa História · Cardápio · Reservas · Delivery · Galeria · Contato · Login · 404

## Preparação para integração com FastAPI

Toda a camada de dados passa por `src/services/`. Os dados hoje vêm de arquivos JSON em
`src/data/`, mas cada função de serviço já indica, em comentário, a chamada Axios
equivalente que deverá substituí-la quando o backend estiver pronto — por exemplo:

```js
// hoje:
export async function getMenuItems() {
  return Promise.resolve(menuData)
}

// futuro, com FastAPI:
export async function getMenuItems() {
  const { data } = await api.get('/menu')
  return data
}
```

Configure a URL da API copiando `.env.example` para `.env` e ajustando `VITE_API_URL`.

## Design

Paleta: Verde Escuro `#1F4D36`, Vermelho Vinho `#8B1E24`, Creme `#F6F1E7`, Bege `#E9DDC8`,
Marrom Madeira `#5B3A29`, Dourado `#B9924C`.

Tipografia: Cinzel (títulos), Cormorant Garamond (subtítulos/citações), Lato (corpo),
Open Sans (rótulos/UI).

Elemento de assinatura: um selo de cera dourado (`.wax-seal`, em `src/styles/global.css`)
usado como divisor entre seções, remetendo aos selos que fechavam receitas de família
transmitidas por gerações.

## Observações importantes

- Não há backend, banco de dados ou autenticação real neste repositório — apenas a interface.
- O login em `/login` é uma simulação de UI (Context API), sem validação de credenciais.
- Todos os dados de cardápio, bebidas e galeria são mockados em `src/data/*.json`.
