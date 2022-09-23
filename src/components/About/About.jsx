import React from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';
import aboutTab from '../../assets/tab-about.svg';
import meHead from '../../assets/me/about-head.jpg';
import meSkills from '../../assets/me/about-skills.gif';
import { Parallax } from 'react-scroll-parallax';


function About() {
  function AboutHead(){
    return (          
      <div className='about-head'>
        <img className='about-head-img'src={meHead} alt='me head img'/>
        <div className='about-head-container'>
          <h1 className='about-head-title'>hey! i'm han xheng.</h1>
          <p className='about-head-body'>i'm a student currently studying <b>computer science</b> and <b>economics</b> at the university of toronto, canada with a strong desire to learn more: about <b>software, finance</b> and <b>everything in between.</b></p>
        </div>
      </div>
    )
  }

  function AboutSkills(){
    return(
      <div className='about-skills'>
        <Parallax speed={30}>
          <ul className='about-skills-list'>
            <li className='about-skills-skill about-skills-lang'>python<br/>java<br/>c++<br/></li>
            <li className='about-skills-skill about-skills-web'>javascript<br/>html {'&'} css<br/>reactjs<br/></li>
            <li className='about-skills-skill about-skills-game'>c#<br/>unity<br/></li>
            <li className='about-skills-skill about-skills-software'>figma<br/>photoshop<br/>illustrator<br/></li>
          </ul>
        </Parallax>

        <img className='about-skills-img' src={meSkills} alt='me skills img'/>
      </div>
    )
  }

  function AboutEdu(){
    return(
      <div className='about-edu'>
        <div className='about-edu-tab'>
          <img className='about-edu-img' src={aboutTab} alt='tab'/>
          <h2 className='about-edu-title'>education</h2>
          <p className='about-edu-body'>
            <b>university of toronto - class of 2026 </b><br/>
            {'('}intended{')'} double major in computer science and economics<br/>
            <b>garden international school - class of 2022</b><br/>
            a-levels: 4A*<br/>
            <b>help international school</b><br/>
            igcse: 9A* 1A<br/>
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className='about'>
        <AboutHead />
        <AboutSkills />
        <AboutEdu />
      </div>
      <Footer />
    </>
  )
}

export default About