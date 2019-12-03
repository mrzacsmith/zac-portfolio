import React from 'react'
import brush from '../images/brush-stroke-banner-7.png'

function LandingPage(props){

     return(
           <div>
               <div className="nav-bar">
                    <nav>
                         {/* <a href="#LandingPage"><img className="logo-home" src={KevinHome} alt="Home logo" /></a> */}
                         <div className='nav-link-container'>
                              <a href="#AboutMe">About</a>
                              <a href="#Projects">Projects</a>
                              <a href="#Contact">Contact</a>
                              {/* <button className="resume" onClick={resumeButton}>Resume</button> */}
                              <a href="https://drive.google.com/file/d/1ibcZg4aKwkamiGJtr4BCL2yFeXZCwqLD/view?usp=sharing" className="resume">Resume</a>
                         </div>
                    </nav>
               </div>
               {/* <div className="logo-container"><img src={Logo} alt="logo" className="logo" />
               </div> */}
               <div className="landing-page">
                    <div className="name-title">Hello, my name is <h1><span className="underline--magical">Zachery Smith</span>.</h1></div> 


                    <div className="credentials-title">
                    < br/>I am a <span className="emphasized-intro one highlight">Full Stack Web Developer</span>
                    < br/>with a <span className="emphasized-intro">Masters in Cybersecurity</span>.
                    < br/><span className="smaller-title">Formerly a </span><span className="emphasized-intro three">cybersecurity researcher</span>, 
                    < br/><span className="emphasized-intro three">crytocurrency data officer</span>,
                    < br/>and <span className="emphasized-intro three">computer science professor</span>.
                    </div>
               </div>
          </div>
     )
}

export default LandingPage;