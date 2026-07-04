import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/home'
import About from '../pages/About/About'
import Menu from '../pages/Menu/menu'
import Reservations from '../pages/Reservations/reservations'
import Delivery from '../pages/Delivery/delivery'
import Gallery from '../pages/Gallery/gallery'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/login'
import NotFound from '../pages/NotFound/notfound'

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
