import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Menu from '../pages/Menu/Menu'
import Reservations from '../pages/Reservations/Reservations'
import Delivery from '../pages/Delivery/Delivery'
import Gallery from '../pages/Gallery/Gallery'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossa-historia" element={<About />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/reservas" element={<Reservations />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}
