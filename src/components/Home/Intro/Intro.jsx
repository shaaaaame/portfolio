import { useRef, React } from 'react';
import { NavLink } from 'react-router-dom';
import intro from '../../../assets/intro_tab.png';
import resume from '../../../assets/HAN_XHENG-RESUME.pdf';
import { useIsVisible } from 'react-is-visible';
import classNames from 'classnames';

import './Intro.css';

function Intro() {
  const ref = useRef();
  const isVisible = useIsVisible(ref, {once: true});
  var imgClass = classNames(
      'intro-tab',
      {'fade-fromLeft' : isVisible}
  )

  var bodyClass = classNames(
      'intro-container',
      {'fade-fromRight' : isVisible}
  )

  return (
    <div className='intro' >
        <img className={imgClass} src={intro} alt="me" />
        <div className={bodyClass} ref={ref}>
            <h1 className='intro-title'>hey!</h1>
            <p className='intro-body'>i’m han xheng from malaysia, currently studying computer science and economics at the university of toronto, canada.</p>
            <div className='intro-links'>
              <h3 className='intro-link'><b><NavLink to="/about">see more about me -{'>'}</NavLink></b></h3>
              {'<h3 className='intro-link'><b><a href={resume}>resume pdf -{'>'}</a></b></h3>'}
            </div>
        </div>
    </div>
  )
}

export default Intro
