import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AnimatedRoutes from './components/Animations/AnimatedRoutes';
import ScrollToTop from './components/Utility/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <AnimatedRoutes />
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
