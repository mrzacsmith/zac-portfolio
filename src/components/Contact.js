import React from 'react'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import medium from '../images/mediumicon.png'
import stackoverflow from '../images/stackoverflow.png'
import github from '../images/githubicon.png'
import email from '../images/email.png'

function Contact(){

     return(<div className="contact-container">
     
          <div className="icon-container">
          <img src={twitter} alt="twitter" className="icon"/>
          <img src={linkedin} alt="linkedin"  className="icon"/>
          <img src={stackoverflow} alt="stackoverflow" className="icon" />
          <img src={github} alt="github" className="icon"/>
          <img src={email} alt="email" className="icon" />
          <img src={medium} id="medium-icon" alt="medium" className="icon" />
          </div>
     </div>)
}

export default Contact