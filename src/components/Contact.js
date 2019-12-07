import React from 'react'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import medium from '../images/mediumicon.png'
import stackoverflow from '../images/stackoverflow.png'
import github from '../images/githubicon.png'
import email from '../images/gmail.png'
import youtube from '../images/youtube.png'

function Contact(){

     return(
     <div className="contact-container" id="contact">
          <div className="icon-container">
                
          <div className="icon-container-1">
               <div className="icon-container-title">
                    <p>Let's Talk Business</p>
               </div> 
               <img src={twitter} alt="twitter" className="icon"/>
               <img src={linkedin} alt="linkedin"  className="icon"/>
               <img src={youtube} alt="linkedin"  className="icon"/>
               <img src={email} alt="email" className="icon" />
          </div>
       
          <div className="divider"></div>

          <div className="icon-container-2">
               <div className="icon-container-title">
                    <p>Work Space</p>
               </div>
               <img src={github} alt="github" className="icon"/>
               <img src={stackoverflow} alt="stackoverflow" className="icon" />
               <img src={medium} id="medium-icon" alt="medium" className="icon" />
          </div>
          
          </div>
     </div>)
}

export default Contact