// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAuthors from './components/FeaturedAuthors';
import TopSellingBooks from './components/TopSellingBooks';
import FeaturedBooks from './components/FeaturedBooks';
import WeekOfBook from './components/WeekOfBook';
import Footer from './components/Footer';


// register Swiper custom elements
register();






const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedAuthors />
      <TopSellingBooks />
      <FeaturedBooks />
      <WeekOfBook />
      <Footer />


    </>
  )
}

export default App