import { React, useEffect, useState, useRef} from 'react';
import tab_horizontal from '../../assets/tab-horizontal.png';
import tab_vertical from '../../assets/tab-vertical.png';
import placeholder from '../../assets/placeholder.png';
import  {useIsVisible } from 'react-is-visible';
import classNames from 'classnames';
import './Projects.css';




function ProjectRight(props){

    const ref = useRef();
    const isVisible = useIsVisible(ref, {once: true});
    var imgClass = classNames(
        'project-img project-img-right',
        {'fade-fromLeft' : isVisible}
    )

    var bodyClass = classNames(
        'project-body project-body-right',
        {'fade-fromRight' : isVisible}
    )

    return(
        <div className='project' ref={ref}>
            <img className={imgClass} src={props.src} alt="project image"/>
            <div className={bodyClass}>
                <h3 className='project-body-title'>project</h3>
                <img className="project-body-tab" src={tab_horizontal} alt="tab"/>
                <div className='project-body-container'>
                    <p className='project-body-text'>{props.text}</p>
                </div>
            </div>
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
            <img className={imgClass} src={props.src} alt="project image"/>
            <div className={bodyClass}>
                <h3 className='project-body-title'>project</h3>
                <img className="project-body-tab" src={tab_horizontal} alt="tab"/>
                <div className='project-body-container'>
                    <p className='project-body-text'>{props.text}</p>
                </div>
            </div>
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
                <h3 className='project-vertical-title'>{props.title}</h3>
                <img className='project-vertical-img' src={props.src} alt='project img'/>
                <p className='project-vertical-text'>{props.text}</p>
            </div>
        </div>
    )
}

function Projects() {
    const [isMobile, setIsMobile] = useState(false);

    function getWidth() {
        var maxWidth = Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.documentElement.clientWidth
         );
         if(maxWidth <= 768){
             setIsMobile(true);
         }else
         {
            setIsMobile(false);
         }
         return maxWidth;
    }
    
    window.addEventListener("resize", getWidth);
    useEffect(() => {getWidth()});

    return (
        <>
            {isMobile ? 
            <div className='projects'>
                <ProjectVertical src={placeholder} title="project1" text="no projects yet..."/>
                <ProjectVertical src={placeholder} title="project2" text="no projects yet..."/>
                <ProjectVertical src={placeholder} title="project3" text="no projects yet..."/>
            </div>
            :
            <div className='projects'>
                <ProjectRight src={placeholder} text="no projects yet..."/>
                <ProjectLeft src={placeholder} text="no projects yet..."/>
                <ProjectRight src={placeholder} text="no projects yet..."/>
            </div>        
            }
        </>   
    )
}

export default Projects