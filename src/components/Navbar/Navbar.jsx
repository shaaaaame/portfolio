import './Navbar.css';
import React from 'react';
import { useState } from 'react';
import menuIcon from '../../assets/menu.svg';
import closeIcon from '../../assets/close.svg';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenubarActive, setIsMenubarActive] = useState(false);

  return (
    <nav className='nav'>
        <NavLink className='nav-name' to='/'>hanxhengchew</NavLink>
        <ul className='nav-list'>
          <li className='nav-item'><NavLink to='/'>home</NavLink></li>
          <li className='nav-item'><NavLink to='/about'>about</NavLink></li>
          <li className='nav-item'><NavLink to='/projects'>projects</NavLink></li>
          <li className='nav-item'><NavLink to='/contact'>contact</NavLink></li>
        </ul>
        <div className='nav-menu'>
          <img onClick={() => setIsMenubarActive(true)} className='nav-menu-icon' src={menuIcon} alt='menu'/>

          <CSSTransition
            in={isMenubarActive}
            classNames='nav-menu-anim'
            timeout={300}
            unmountOnExit
          >
            <div className='nav-menubar'>
                <img onClick={() => setIsMenubarActive(false)} className='nav-menubar-close' src={closeIcon} alt='close'/>
                <ul className='nav-menubar-list'>
                  <li className='nav-menubar-item' onClick={() => setIsMenubarActive(false)}><h2><NavLink to='/'>home</NavLink></h2></li>
                  <li className='nav-menubar-item' onClick={() => setIsMenubarActive(false)}><h2><NavLink to='/about'>about</NavLink></h2></li>
                  <li className='nav-menubar-item' onClick={() => setIsMenubarActive(false)}><h2><NavLink to='/projects'>projects</NavLink></h2></li>
                  <li className='nav-menubar-item' onClick={() => setIsMenubarActive(false)}><h2><NavLink to='/contact'>contact</NavLink></h2></li>
                </ul>
            </div>
          </CSSTransition>


        </div>  
    </nav>
  )
}

export default Navbar