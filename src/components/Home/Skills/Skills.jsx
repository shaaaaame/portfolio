import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Skills.css';

function Skills() {
  function importAll(r) {
    let images = [];
    r.keys().map((item) => { images.push(
    <li><img className='skills-skill' src={r(item)} alt="skill" /></li>
    ); });
    return images;
  }
  
  const images = importAll(require.context('../../../assets/skills/', false, /\.svg$/));

  return (
    <Parallax speed={-1}>
      <div className='skills'>
          <ul className='skills-container'>
              <>{images}</>
          </ul>
      </div>
    </Parallax>
  )
}

export default Skills