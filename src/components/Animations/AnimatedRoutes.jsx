import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {Route, Routes, useLocation} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes