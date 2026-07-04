import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
