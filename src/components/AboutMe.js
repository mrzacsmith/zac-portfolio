import React from 'react'
import aboutme from '../images/aboutme.jpeg'

function AboutMe(){

     return(
          <div className="aboutme-container">

               {/* <div>
                    <img src={aboutme} alt="profile picture" className="profile-pic" />
                    <h1 className="about-headline">About</h1>
               </div>

               <div className="about-content">
                    <div className="about">
                         <h3>Where I've been</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    </div>
                    <div className="about">
                         <h3>What I'm doing</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    </div>
                    <div className="about">
                         <h3>What I hope to do</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    </div>
               </div> */}

               <div>
                    {/* <div>
                         <h1 className="about-title"><span className="about-headline">README.md</span></h1>
                    </div> */}

                    <div className="about-content-two">
                         <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                         <img src={aboutme} alt="profile picture" className="profile-pic" />
                    </div>
               </div>

          </div>)
}

export default AboutMe;