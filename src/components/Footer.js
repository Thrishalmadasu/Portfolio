import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/Thrishalmadasu" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/thrishal-madasu-387396281/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:thrishalmadasu@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/Thrishalmadasu/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer