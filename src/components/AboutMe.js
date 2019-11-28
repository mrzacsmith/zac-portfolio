import React from 'react'
import aboutme from '../images/aboutme.jpeg'

function AboutMe(){

     return(<div>
          
          Hello this is the about me
          <img src={aboutme} alt="profile picture" className="profile-pic" />

          </div>)
}

export default AboutMe;