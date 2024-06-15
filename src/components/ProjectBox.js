import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ImageEditorDesc : "Java Image Editor: Empowers basic image editing tasks through Java's BufferedImage and ImageIO classes. Allows easy adjustment of brightness, rotation, and inversion via console input.",

    WebScraperDesc : "Dynamic Python web scraper extracts product prices from major e-commerce platforms—Flipkart, Snapdeal, and Amazon. Enables seamless comparison, empowering users to discover the most cost-effective options effortlessly.",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt='projectPhoto' />
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox