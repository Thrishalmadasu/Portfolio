import React from 'react';
import ProjectBox from './ProjectBox';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox  projectName="Image Editor" />
        <ProjectBox  projectName="Web Scraper" />
      </div>

    </div>
  )
}

export default Projects