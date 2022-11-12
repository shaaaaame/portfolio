import { React, useEffect, useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import  {useIsVisible } from 'react-is-visible';
import classNames from 'classnames';

import tab_horizontal from '../../assets/tab-horizontal.png';
import tab_vertical from '../../assets/tab-vertical.png';
import placeholder from '../../assets/placeholder.png';
import dogOrCat from '../../assets/projects/dogOrCat.png';
import untitled from '../../assets/projects/untitled.gif';
import portfolio from '../../assets/projects/portfolio.png';
import physsim from '../../assets/projects/physsim.png';
import supportMe from '../../assets/projects/supportMe.png';



import './Projects.css';

class ProjectClass{
    constructor(name, description, image){
        this.name = name;
        this.description = description;
        this.image = image
        //add link to project, e.g github or website
        //https://predictor-app-ml.herokuapp.com/
    }
}

function ProjectRight(props){

    const ref = useRef();
    const isVisible = useIsVisible(ref, {once: true});
    var imgClass = classNames(
        'project-img project-img-right',
        {'fade-fromLeft' : isVisible}
    )

    var bodyClass = classNames(
        'project-body-right project-body',
        {'fade-fromRight' : isVisible}
    )

    return(
        <div className='project' ref={ref}>
            <Parallax speed={-7} easing='easeInOut' className='project-back'>
                <img className={imgClass} src={props.project.image} alt="project image"/>
            </Parallax>
            <Parallax speed={7} easing='easeInOut' className='project-front'>
                <div className={bodyClass}>
                    <h3 className='project-body-title'>{props.project.name}</h3>
                    <img className="project-body-tab" src={tab_horizontal} alt="tab"/>
                    <div className='project-body-container'>
                        <p className='project-body-text'>{props.project.description}</p>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

function ProjectLeft(props){
    const ref = useRef();
    const isVisible = useIsVisible(ref, {once: true});
    var imgClass = classNames(
        'project-img project-img-left',
        {'fade-fromRight' : isVisible}
    )

    var bodyClass = classNames(
        'project-body project-body-left',
        {'fade-fromLeft' : isVisible}
    )

    return(
        <div className='project' ref={ref}>
            <Parallax speed={7} easing='easeInOut' className='project-front'>
                <div className={bodyClass}>
                    <h3 className='project-body-title'>{props.project.name}</h3>
                    <img className="project-body-tab" src={tab_horizontal} alt="tab"/>
                    <div className='project-body-container'>
                        <p className='project-body-text'>{props.project.description}</p>
                    </div>
                </div>
            </Parallax>
            <Parallax speed={-7} easing='easeInOut' className='project-back'>
                <img className={imgClass} src={props.project.image} alt="project image"/>
            </Parallax>
        </div>
    )
}

function ProjectVertical(props){
    const ref = useRef();
    const isVisible = useIsVisible(ref, {once: true});
    var bodyClass = classNames(
        'project-vertical-container',
        {'fade-slideUp' : isVisible}
    )

    return(
        <div className='project-vertical'>
            <div className={bodyClass} ref={ref}>
                <img className='project-vertical-tab' src={tab_vertical} alt='project vertical tab'/>
                <h3 className='project-vertical-title'>{props.project.name}</h3>
                <img className='project-vertical-img' src={props.project.image} alt='project img'/>
                <p className='project-vertical-text'>{props.project.description}</p>
            </div>
        </div>
    )
}

function Projects() {
    // setting mobile view when needed
    const [isMobile, setIsMobile] = useState(false);

    function getWidth() {
        var maxWidth = Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.documentElement.clientWidth
         );
         if(maxWidth <= 960){
             setIsMobile(true);
         }else
         {
            setIsMobile(false);
         }
         return maxWidth;
    }
    
    window.addEventListener("resize", getWidth);
    useEffect(() => {getWidth()});

    // actual project data
    const proj1 = new ProjectClass("HX-Portfolio2022","This responsive porfolio! Designed on Figma and built on React (JS)", portfolio)
    const proj2 = new ProjectClass("Untitled", "2.5D pixel platformer game that follows a lost girl and her animal friends. Built on the Unity game engine (C#).", untitled)
    const proj3 = new ProjectClass("Support-me", "a full-stack web platform for academic and mental health peer support. (built for Newhacks hackathon)", supportMe)
    const proj4 = new ProjectClass("PhysSim", "a simulation of physics experiments such as Galperin’s Billiards and Rutherford’s Gold Foil experiment.", physsim)
    const proj5 = new ProjectClass("Dog or Cat?", "Simple webapp that predicts if an image is a dog or a cat. Built using Flask (Python) and hosted on Heroku (RIP).", dogOrCat)

    const projs = [proj1, proj2, proj3, proj4, proj5];
    const projVert = []

    return (
        <motion.div 
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {isMobile ? 
            <div className='projects'>
                <ProjectVertical project={proj1}/>
                <ProjectVertical project={proj2}/>
                <ProjectVertical project={proj3}/>
                <ProjectVertical project={proj4}/>
                <ProjectVertical project={proj5}/>
            </div>
            :
            <div className='projects'>
                <ProjectRight project={proj1}/>
                <ProjectLeft  project={proj2}/>
                <ProjectRight project={proj3} />
                <ProjectLeft  project={proj4}/>
                <ProjectRight project={proj5} />
            </div>        
            }
        </motion.div>   
    )
}

export default Projects