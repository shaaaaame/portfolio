import {useRef, React} from 'react';
import { useIsVisible } from 'react-is-visible';
import classNames from 'classnames';
import './Contact.css';

import github from '../../../assets/github.svg';
import linkedIn from '../../../assets/linkedin.svg';



function Contact() {
  const ref = useRef();
  const isVisible = useIsVisible(ref, {once : true});
  const anim1 = classNames( 'contact-title', {'fade1' : isVisible})
  const anim2 = classNames( 'contact-email', {'fade2' : isVisible})
  const anim3 = classNames( 'contact-container', {'fade3' : isVisible})
  const anim4 = classNames( 'contact-container', {'fade4' : isVisible})
  const extend = classNames('contact-divider', {'extend' : isVisible})

  return (
    <div className='contact' >
        <h3 className={anim1} ref={ref}>let's work together :{")"}</h3>
        <a href=""><h2 className={anim2}>hanxheng@gmail.com</h2></a>
        <div className={extend}></div>
        <div className={anim3}>
            <img className='contact-logo' src={linkedIn} alt="linkedin"/>
            <h3 className='contact-link'><b><a href="https://www.linkedin.com/in/han-xheng-chew-08747820b">Han Xheng Chew</a></b></h3>
        </div>
        <div className={anim4}>
            <img className='contact-logo' src={github} alt="github"/>
            <h3 className='contact-link'><b><a href="https://github.com/shaaaaame">shaaaaame</a></b></h3>
        </div>

    </div>
  )
}

export default Contact