import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {Route, Routes, useLocation} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes