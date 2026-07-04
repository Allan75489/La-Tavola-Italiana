<div align="center">

# 🍝 La Tavola Italiana

**Frontend de um restaurante italiano de alto padrão, construído em React + Vite.**

*Elegância, tradição e a autêntica cucina italiana — traduzidas em código limpo e componentizado.*

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Axios](https://img.shields.io/badge/Axios-1.7-5A29E4?logo=axios&logoColor=white)](https://axios-http.com)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#licença)

[Repositório](https://github.com/Allan75489/La-Tavola-Italiana) · [Reportar bug](https://github.com/Allan75489/La-Tavola-Italiana/issues) · [Sugerir feature](https://github.com/Allan75489/La-Tavola-Italiana/issues)

</div>

---

## 📖 Sobre o projeto

**La Tavola Italiana** é o frontend completo de um site para um restaurante italiano
tradicional — pensado para transmitir elegância, sofisticação e paixão pela gastronomia
italiana, com um design que não parece um template genérico.

Este repositório contém **apenas o frontend**. O backend será desenvolvido futuramente em
**Python (FastAPI)** com **MySQL**, e o frontend já está preparado para consumir essa API
REST sem exigir refatoração — toda a camada de acesso a dados está isolada em
`src/services/`.

> Projeto desenvolvido com foco em portfólio: arquitetura organizada, componentes
> reutilizáveis e um design system próprio, inspirado nas trattorias tradicionais da
> Toscana, Roma, Milão e Sicília.

---

## ✨ Funcionalidades

- 🏠 **Home** com hero em tela cheia, seção "por que nos escolher" e prato assinatura
- 📜 **Nossa História** — linha do tempo, missão e valores da família fictícia
- 🍽️ **Cardápio digital** completo (Pane, Salumi, Formaggi, Antipasti, Primi Piatti,
  Molhos, Secondi, Contorni, Dolci e Bebidas), com busca e filtro por categoria
- 📅 **Reservas** com formulário validado em React (nome, telefone, e-mail, data, horário,
  pessoas e observações)
- 🛵 **Delivery** no estilo iFood, com carrinho lateral, quantidade editável e resumo do
  pedido
- 🖼️ **Galeria** em grid masonry com lightbox
- ✉️ **Contato** com mapa incorporado, endereço, WhatsApp e redes sociais
- 🔐 **Login** (interface mockada, pronta para autenticação real via FastAPI)
- 🚫 **Página 404** personalizada
- 📱 **Totalmente responsivo** — desktop, notebook, tablet e celular
- 🎬 Animações com **Framer Motion** (fade, slide, scale, hover, scroll reveal)
- 🧭 Navbar fixa com efeito **glassmorphism**, encolhe ao rolar e vira menu hambúrguer no mobile

---

## 🛠️ Tecnologias

| Categoria         | Tecnologia                          |
|-------------------|--------------------------------------|
| Base              | React 18 + Vite 5                    |
| Roteamento        | React Router DOM 6                   |
| Requisições HTTP  | Axios (pré-configurado para FastAPI) |
| Estado global      | Context API (Carrinho e Autenticação)|
| Estilização       | CSS Modules                          |
| Animações         | Framer Motion                        |

Sem Bootstrap, sem jQuery — CSS Modules puro, com um design system próprio de cores,
tipografia e espaçamento.

---

## 📂 Estrutura do projeto

```
src/
├── assets/              arquivos estáticos
├── components/          componentes reutilizáveis
│   ├── Navbar/
│   ├── Footer/
│   ├── Button/
│   ├── SectionTitle/
│   ├── MenuItemCard/
│   └── AllergenIcons/
├── pages/                uma pasta por página (.jsx + .module.css)
│   ├── Home/
│   ├── About/            (Nossa História)
│   ├── Menu/              (Cardápio)
│   ├── Reservations/
│   ├── Delivery/
│   ├── Gallery/
│   ├── Contact/
│   ├── Login/
│   └── NotFound/
├── layouts/              MainLayout (Navbar + conteúdo + Footer)
├── routes/               definição centralizada das rotas
├── hooks/                hooks customizados (ex: useScrollPosition)
├── context/              Context API (CartContext, AuthContext)
├── services/             camada de acesso a dados (api.js, menuService.js)
├── styles/               variáveis de design (cores, tipografia) e reset global
├── utils/                funções utilitárias (ex: formatCurrency)
└── data/                 dados mockados
    ├── menu.json               dados dos pratos (nome, preço, descrição, alérgenos)
    ├── menuImages.json         mapa { id: urlDaImagem } dos pratos
    ├── drinks.json             dados das bebidas
    ├── drinksImages.json       mapa { id: urlDaImagem } das bebidas
    └── gallery.json            fotos da galeria
```

> **Por que os dados do cardápio ficam separados das imagens?**
> `menu.json`/`drinks.json` guardam só as informações do prato. As imagens vivem em
> `menuImages.json`/`drinksImages.json`, num mapa simples `{ "id-do-item": "url" }`,
> unidos em tempo de execução por `menuService.js`. Se uma imagem quebrar ou for
> trocada por uma foto própria do restaurante, basta editar a URL correspondente ao
> `id` — sem tocar em nome, preço, descrição ou alérgenos. Itens sem imagem cadastrada
> recebem automaticamente um placeholder padrão.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18 ou superior
- npm (ou yarn/pnpm)

### Passo a passo

```bash
# clone o repositório
git clone https://github.com/Allan75489/La-Tavola-Italiana.git
cd La-Tavola-Italiana

# instale as dependências
npm install

# rode em modo desenvolvimento
npm run dev
```

O projeto sobe em `http://localhost:5173`.

### Build de produção

```bash
npm run build
npm run preview
```

### Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste a URL da futura API:

```
VITE_API_URL=http://localhost:8000/api
```

---

## 🔌 Integração futura com o backend (FastAPI + MySQL)

Toda chamada de dados passa por `src/services/`. Hoje, cada função resolve com os
JSONs mockados em `src/data/`, mas já indica em comentário a chamada Axios que deverá
substituí-la quando o backend estiver pronto:

```js
// hoje:
export async function getMenuItems() {
  return Promise.resolve(withImages(menuData, menuImages))
}

// futuro, com FastAPI:
export async function getMenuItems() {
  const { data } = await api.get('/menu')
  return data
}
```

O cliente Axios (`src/services/api.js`) já está configurado com `baseURL`,
interceptor de token (JWT) e tratamento de erros — bastando apontar `VITE_API_URL`
para o endereço real da API quando ela existir.

---

## 🎨 Design

**Paleta**

| Cor              | Hex       |
|-------------------|-----------|
| Verde Escuro       | `#1F4D36` |
| Vermelho Vinho     | `#8B1E24` |
| Creme              | `#F6F1E7` |
| Bege               | `#E9DDC8` |
| Marrom Madeira     | `#5B3A29` |
| Dourado            | `#B9924C` |

**Tipografia**

- `Cinzel` — títulos e marca
- `Cormorant Garamond` — subtítulos e citações
- `Lato` — corpo de texto
- `Open Sans` — rótulos e elementos de interface

**Elemento de assinatura:** um selo de cera dourado (`.wax-seal`, em
`src/styles/global.css`) usado como divisor entre seções, remetendo aos selos que
fechavam receitas de família transmitidas por gerações.

---

## ⚠️ Observações importantes

- Não há backend, banco de dados ou autenticação real neste repositório — apenas a interface.
- O login em `/login` é uma simulação de UI via Context API, sem validação de credenciais.
- Os dados de cardápio, bebidas e galeria são mockados em `src/data/*.json`.
- Algumas imagens usadas são de bancos de imagens/fontes públicas apenas como
  placeholder visual e devem ser substituídas por fotos reais do restaurante antes de
  ir para produção.

---

## 🗺️ Roadmap

- [ ] Backend em FastAPI + MySQL
- [ ] Autenticação real (JWT)
- [ ] Persistência de reservas e pedidos de delivery
- [ ] Painel administrativo para gestão do cardápio
- [ ] Testes automatizados (Vitest + Testing Library)
- [ ] Deploy (Vercel/Netlify para o frontend, backend em serviço próprio)

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<div align="center">

Feito com 🍷 e tradição italiana.

</div>