import React from 'react';
import { useState } from 'react';

import dog from '../../assets/dog.png';
import dog_bark from '../../assets/dog-bark.gif';
import dog_hover from '../../assets/dog-hover.gif';
import './Hero.css';

function Hero() {

  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const OnClick = () => {
    setIsClicked(true);
    setTimeout(() => {setIsClicked(false)}, 1000);
  }

  return (
    <div className='hero'>
        <img onClick={OnClick} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} src={isClicked ? dog_bark : (isHovering ? dog_hover : dog)} className='hero-dog' alt="dog" />
        <h1 className='hero-title'>hey, i'm <b className='hero-title-name'>han xheng</b></h1>
        <h3 className='hero-link'><b><a href="#">view my works -{'>'}</a></b></h3> {/* add add href */}
        <h3 className='hero-link'><b><a href="#">contact -{'>'}</a></b></h3> {/* add add href */}
    </div>
  )
}

export default Hero