import './Navbar.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import menuIcon from '../../assets/menu.svg';
import closeIcon from '../../assets/close.svg';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenubarActive, setIsMenubarActive] = useState(false);

  return (
    <nav className='nav'>
        <a href="#" className='nav-name'>hanxhengchew</a>
        <ul className='nav-list'>
            <li className='nav-item'><NavLink to='/About'>about</NavLink></li>{/* add add href */}
            <li className='nav-item'><Link to='projects' smooth={true} duration={1000}>projects</Link></li>
            <li className='nav-item'><Link to='contact' smooth={true} duration={1000}>contact</Link></li>{/* add add href */}
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
                  <li className='nav-menubar-item' onClick={() => setIsMenubarActive(false)}><h2><NavLink to='/About'>about</NavLink></h2></li>{/* add add href */}
                  <li className='nav-menubar-item'><h2><Link to='projects' smooth={true} duration={1000} onClick={() => setIsMenubarActive(false)}>projects</Link></h2></li>
                  <li className='nav-menubar-item'><h2><Link to='contact' smooth={true} duration={1000} onClick={() => setIsMenubarActive(false)}>contact</Link></h2></li>
                </ul>
            </div>
          </CSSTransition>


        </div>  
    </nav>
  )
}

export default Navbar