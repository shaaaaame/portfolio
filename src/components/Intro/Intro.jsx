import { useRef, React } from 'react';

import intro from '../../assets/intro_tab.png';
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
        <img className={imgClass} src={intro} alt="me" ref={ref}/>
        <div className={bodyClass}>
            <h1 className='intro-title'>hey!</h1>
            <p className='intro-body'>i’m han xheng from malaysia, currently studying computer science and economics at the university of toronto, canada.</p>
            <div className='intro-links'>
              <h3 className='intro-link'><b><a href="#">see more about me -{'>'}</a></b></h3> {/* add href */}
              <h3 className='intro-link'><b><a href="#">download cv -{'>'}</a></b></h3> {/* add href */}
            </div>
        </div>
    </div>
  )
}

export default Intro