import { motion } from 'framer-motion';

import './Home.css';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Intro from './Intro/Intro';


function Home() {
  return (
    <motion.div className='home'
      inital={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Hero />
      <Skills />
      <Intro />
    </motion.div>

  );
}

export default Home;
