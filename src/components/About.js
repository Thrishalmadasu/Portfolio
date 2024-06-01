import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Thrishal madasu</b> and I am from Hyderabad, India.
            I'm a <b>first year</b> student at <b>Scaler School of Technology</b>. <br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow.<br/>
          </p>
        </div>

        <div>
          <Tilt>
               {/* <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            /> */}
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='Swift' />
        <Skills skill='React' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
      </div>
    </>
  )
}

export default About