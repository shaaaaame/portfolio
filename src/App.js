import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
