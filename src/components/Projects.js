import React from 'react'
import immunify from '../images/immunify.png'

function Projects(){

     return(<div className="project-container">
          <div className="project-header">
               <h1><span className="project-header-highlight">Projects</span></h1>
          </div>

          <div className="project">
               <div>
                    <img src={immunify} className="project" />
                    <p className="tech-stack">tech stack: react, redux, node.js, express, SQLite 3, less  </p>
               </div>

               <div className="project-grad">
                    <p className="project-gradient"></p>
                    <div>
                         <h1>Immunify </h1>
                         <p className="project-description"><span className="project-subtitle">Build Week</span> • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> 
                    </div>
               </div>
               <button className="project-button">View</button>
               <button className="project-button">Code</button>
          </div>

         
         <div className="project">
               <div>
                    <img src={immunify} className="project" />
                    <p className="tech-stack">tech stack: react, redux, node.js, express, SQLite 3, less  </p>
               </div>

               <div className="project-grad">
                    <p className="project-gradient"></p>
                    <div>
                         <h1>Immunify </h1>
                         <p className="project-description"><span className="project-subtitle">Build Week</span> • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> 
                    </div>
               </div>
               <button className="project-button">View</button>
               <button className="project-button">Code</button>
          </div>






          <div className="project">
               <div>
                    <img src={immunify} className="project" />
                    <p className="tech-stack">tech stack: react, redux, node.js, express, SQLite 3, less  </p>
               </div>

               <div className="project-grad">
                    <p className="project-gradient"></p>
                    <div>
                         <h1>Immunify </h1>
                         <p className="project-description"><span className="project-subtitle">Build Week</span> • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> 
                    </div>
               </div>
               <button className="project-button">View</button>
               <button className="project-button">Code</button>
          </div>
          
       
     </div>)
}

export default Projects