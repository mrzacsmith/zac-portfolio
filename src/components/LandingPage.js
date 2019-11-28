import React from 'react'

function LandingPage(props){

     return(
          <div className="landing-page">
               <div className="nav-bar">
                    <nav>
                         <a href="#LandingPage"></a>
                         <div className='nav-link-container'>
                              <a href="#AboutMe">About</a>
                              <a href="#Projects">Projects</a>
                              <a href="#Contact">Contact</a>
                              <a href="#Contact">Resume</a>
                         </div>
                    </nav>
               </div>

               <div className="landingIntro">
                    Hello, my name is <span className="emphasized-intro">Zachery Smith</span>. 
                    < br/>I am a <span className="emphasized-intro">Full Stack Web Developer</span>
                    < br/>with a <span className="emphasized-intro">Masters in Cybersecurity</span>.
                    < br/>Formerly a <span className="emphasized-intro">cybersecurity researcher</span>, 
                    < br/><span className="emphasized-intro">crytocurrency data officer</span>,
                    < br/>and <span className="emphasized-intro">computer science professor</span>.
               </div>
          </div>
     )
}

export default LandingPage;