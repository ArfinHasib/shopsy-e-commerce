import { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';

const App = () => {
   useEffect(() => {
      AOS.init({
         offset: 100,
         duration: 800,
         easing: 'ease-in-sine',
         delay: 100,
      });
      AOS.refresh();
   }, []);

   return (
      <div>
         <div>
            <Navbar />
            <Hero />
            <Products />
            <TopProducts />
         </div>
      </div>
   );
};

export default App;
