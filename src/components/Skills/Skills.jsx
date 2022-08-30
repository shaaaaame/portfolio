import React from 'react';
import './Skills.css';

function Skills() {
  function importAll(r) {
    let images = [];
    r.keys().map((item) => { images.push(
    <li><img className='skills-skill' src={r(item)} alt="skill" /></li>
    ); });
    return images;
  }
  
  const images = importAll(require.context('../../assets/skills/', false, /\.svg$/));

  return (
    <div className='skills'>
        <ul className='skills-container'>
            <>{images}</>
        </ul>
    </div>
  )
}

export default Skills