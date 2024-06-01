import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaGithub,FaJava, FaSwift} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";

const Skills = ({skill}) => {
    const icon = {
        Swift : <FaSwift/>,
        Python : <FaPython/>,
        Java : <FaJava/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
    }
    
  return (

    <div title={skill} className='SkillBox'>

      {icon[skill]}

    </div>
  )
}

export default Skills