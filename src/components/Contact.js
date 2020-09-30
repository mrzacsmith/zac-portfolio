import React from 'react'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import medium from '../images/mediumicon.png'
import stackoverflow from '../images/stackoverflow.png'
import github from '../images/githubicon.png'
import email from '../images/gmail.png'
import youtube from '../images/youtube.png'

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="icon-container">
        <div className="icon-container-1">
          <div className="icon-container-title">
            <p>Let's Talk Business</p>
          </div>
          <a
            href="https://twitter.com/mrzacsmith"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mrzacsmith/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="icon" />
          </a>
          <a
            href="https://www.youtube.com/c/ZacSmith"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={youtube} alt="youtube" className="icon" />
          </a>
          <a href="mailto:zac@mrzacsmith.com">
            <img src={email} alt="email" className="icon" />
          </a>
        </div>

        <div className="divider"></div>

        <div className="icon-container-2">
          <div className="icon-container-title">
            <p>Work Space</p>
          </div>
          <a
            href="https://github.com/mrzacsmith"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="github" className="icon" />
          </a>
          <a
            href="https://stackoverflow.com/users/4701373/zac-smith"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={stackoverflow} alt="stackoverflow" className="icon" />
          </a>
          <a
            href="https://medium.com/@mrzacsmith"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={medium} id="medium-icon" alt="medium" className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
