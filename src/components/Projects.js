import React from 'react'
import immunify from '../images/immunify.png'
import airbnb from '../images/airbnbApp.png'
import code from '../images/code.png'
import Fade from 'react-reveal/Fade';


function Projects(){

     return(
     
     <div className="project-container">
          {/* <div className="project-header">
               <h1><span className="project-header-highlight">Projects</span></h1>
          </div> */}
          <Fade bottom>
          <div className="project">
               <div>
                    <img src={airbnb} alt="project" />
               </div>

               <div className="project-grad">
                    <p className="project-gradient"></p>
                    <div>
                         <h1>AirBnB Price Optimizer</h1>
                         <p className="project-description"> Build Week • Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua. Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. <a id="code-google" href="google.com">Check out my code here.</a></p> 
                         <p className="tech-subheader"><span className="project-subtitle">React • Redux • Node.JS • Express • SQLite 3</span></p>
                    </div>
               </div>
          </div>
          </Fade>
         
         <Fade left>
         <div className="project">
               <div>
                    <img src={immunify} alt="project" />
               </div>

               <div className="project-grad">
                    <p className="project-gradient"></p>
                    <div>
                         <h1>Immunify</h1>
                         <p className="project-description"> Build Week • Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua. Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. <a id="code-google" href="google.com">Check out my code here.</a></p> 
                         <p className="tech-subheader"><span className="project-subtitle">React • Redux • Node.JS • Express • SQLite 3</span></p>
                    </div>
               </div>
          </div>
          </Fade>

          <Fade right>
          <div className="project">
               <div>
                    <img src={airbnb} alt="project" />
               </div>

               <div className="project-grad">
                    <p className="project-gradient"></p>
                    <div>
                         <h1>AirBnB Price Optimizer</h1>
                         <p className="project-description"> Build Week • Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua. Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. <a id="code-google" href="google.com">Check out my code here.</a></p> 
                         <p className="tech-subheader"><span className="project-subtitle">React • Redux • Node.JS • Express • SQLite 3</span></p>
                    </div>
               </div>
          </div>
          </Fade>




          <Fade bottom>
             <div className="project">
               <div>
                    <img src={immunify} alt="project" />
               </div>

               <div className="project-grad">
                    <p className="project-gradient"></p>
                    <div>
                         <h1>Immunify </h1>
                         <p className="project-description"> Build Week • Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua. Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. <a id="code-google" href="google.com">Check out my code here.</a></p> 
                         <p className="tech-subheader"><span className="project-subtitle">React • Redux • Node.JS • Express • SQLite 3</span></p>
                    </div>
               </div>
          </div>
          </Fade>
       
     </div>)
}

export default Projects