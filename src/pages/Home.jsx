import About from './About'
import Header from './Header'
import Navbar from './Navbar'
import Products from './Products'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <About />
    </div>
  )
}

export default Home