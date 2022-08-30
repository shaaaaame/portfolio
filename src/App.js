import { Link, Element} from 'react-scroll'

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Skills />
      <Element name='projects'><Projects /></Element>
      <Intro />
      <Element name='contact'><Contact /></Element>
      <Footer/>
    </div>
  );
}

export default App;
