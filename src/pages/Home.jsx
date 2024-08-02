import About from './About'
import Contact from './Contact'
import Header from './Header'
import Navbar from './Navbar'
import Offer from './Offer'
import Products from './Products'
import Testimonial from './Testimonial'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <About />
      <Offer />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Home