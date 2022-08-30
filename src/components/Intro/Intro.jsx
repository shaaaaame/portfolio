import React from 'react';

import intro from '../../assets/intro_tab.png';

import './Intro.css';

function Intro() {
  return (
    <div className='intro'>
        <img className='intro-tab' src={intro} alt="me"/>
        <div className='intro-container'>
            <h1 className='intro-title'>hey!</h1>
            <p className='intro-body'>i’m han xheng from malaysia and i’m currently studying computer science and economics at the university of toronto, canada.</p>
            <h3 className='intro-link'><b><a href="#">see more about me -{'>'}</a></b></h3> {/* add href */}
            <h3 className='intro-link'><b><a href="#">download cv -{'>'}</a></b></h3> {/* add href */}
        </div>
    </div>
  )
}

export default Intro