import React from 'react';
import ProjectBox from './ProjectBox';
import imageEditor from '../images/imageEditor.jpeg';
import webScraper from '../images/webScraper.jpeg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox  projectName="ImageEditor" projectPhoto={imageEditor} />
        <ProjectBox  projectName="WebScraper" projectPhoto={webScraper}/>
      </div>

    </div>
  )
}

export default Projects