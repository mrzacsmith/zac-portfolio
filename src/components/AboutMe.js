import React from 'react'
import aboutme from '../images/aboutme.jpeg'
import Fade from 'react-reveal/Fade';

function AboutMe(){

     return(
          <div className="aboutme-container" id="about">
               <div>
                    <div className="about-content-two">
                         <Fade>
                         <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                         <img src={aboutme} alt="profile picture" className="profile-pic" />
                         </Fade>
                    </div>
               </div>

          </div>)
}

export default AboutMe;