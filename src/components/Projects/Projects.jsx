import React from 'react';

import tab from '../../assets/tab.png';
import placeholder from '../../assets/placeholder.png';

import './Projects.css';


function ProjectRight(props){

    return(
        <div className='project'>
            <img className='project-img project-img-right' src={props.src} alt="project image"/>
            <div className='project-body project-body-right'>
                <img className="project-body-tab" src={tab} alt="tab"/>
                <div className='project-body-container'>
                    <p className='project-body-text'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

function ProjectLeft(props){

    return(
        <div className='project'>
            <img className='project-img project-img-left' src={props.src} alt="project image"/>
            <div className='project-body project-body-left'>
                <img className="project-body-tab" src={tab} alt="tab"/>
                <div className='project-body-container'>
                    <p className='project-body-text'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

function Projects() {
  return (
    <div className='projects'>
        <ProjectRight src={placeholder} text="no projects yet..."/>
        <ProjectLeft src={placeholder} text="no projects yet..."/>
        <ProjectRight src={placeholder} text="no projects yet..."/>
    </div>
  )
}

export default Projects