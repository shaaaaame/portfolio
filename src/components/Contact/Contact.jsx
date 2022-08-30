import React from 'react';
import './Contact.css';

import github from '../../assets/github.svg';
import linkedIn from '../../assets/linkedin.svg';

function Contact() {
  return (
    <div className='contact'>
        <h3 className='contact-title'>let's work together :{")"}</h3>
        <a href=""><h2 className='contact-email'>hanxheng@gmail.com</h2></a>
        <div className='contact-divider'></div>
        <div className='contact-container'>
            <img className='contact-logo' src={linkedIn} alt="linkedin"/>
            <h3 className='contact-link'><b><a href="https://www.linkedin.com/in/han-xheng-chew-08747820b">Han Xheng Chew</a></b></h3>
        </div>
        <div className='contact-container'>
            <img className='contact-logo' src={github} alt="github"/>
            <h3 className='contact-link'><b><a href="https://github.com/shaaaaame">shaaaaame</a></b></h3>
        </div>

    </div>
  )
}

export default Contact