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
                              <a href="#Projects">Work</a>
                              <a href="https://drive.google.com/file/d/1ibcZg4aKwkamiGJtr4BCL2yFeXZCwqLD/view?usp=sharing" className="resume">Resume</a>
                              <a href="#blog">Blog</a>
                              <a href="#Contact">Connect</a>
                         </div>
                    </nav>
               </div>

               <div className="landing-page">
                    {/* <div className="name-title">Hello, my name is <h1><span className="name">Zachery Smith</span>.</h1>
                         <div className="credentials-title">
                         < br/>I am a <span className="emphasized-intro one highlight">Full Stack Web Developer</span>
                         < br/>with a <span className="emphasized-intro">Masters in Cybersecurity</span>.
                         < br/><span className="smaller-title">Formerly a </span><span className="emphasized-intro three">computer science professor</span>, 
                         < br/><span className="emphasized-intro three">cybersecurity researcher</span>,
                         < br/>and <span className="emphasized-intro three">cryptocurrency data officer</span>.
                         </div>
                    </div>  */}



                    <div className="landing-page-title">
                         <p>
                              <span className="name-intro">Hello, my name is</span>
                              <br /><span className="name">Zachery Smith</span>. 
                              <br />I am a <span className="white highlight">Full Stack Web Developer </span>
                              <br />with a <span className="white">Master's in Cybersecurity</span>. 
                              <br />Former <span className="white">computer science professor</span>,
                              <br /><span className="white">cybersecurity researcer</span>,
                              <br />and <span className="white">cryptocurrency data officer</span>.
                         </p>
                    </div>
               </div>



          </div>
     )
}

export default LandingPage;