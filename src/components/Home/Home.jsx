import { Element} from 'react-scroll';
import { motion } from 'framer-motion';

import './Home.css';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Intro from './Intro/Intro';
import Contact from './Contact/Contact';


function Home() {
  return (
    <motion.div className='home'
      inital={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Element name='hero'><Hero /></Element>
      <Skills />
      <Element name='projects'><Projects /></Element>
      <Intro />
      <Element name='contact'><Contact /></Element>
    </motion.div>

  );
}

export default Home;
