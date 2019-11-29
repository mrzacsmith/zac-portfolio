import React from 'react';
import lambda from '../images/lambda.png'
import medium from '../images/medium.png'
import money from '../images/money.png'
import octocat from '../images/octocat.png'
import trump from '../images/trump.png'
import weather from '../images/weather.png'
import nodej from '../images/node-js-logo.jpg'


function Blog(){


     return(<div>Hello this is the blog


          <div className='blog'>
               
               <a href='https://medium.com/@mrzacsmith'>
               <div className="blog-container">
               <img src={medium} alt='medium' className="blog-image" />
               <div className="blog-action">
                         <div className="blog-title">Medium Blog</div>
                         <a href='https://medium.com/@mrzacsmith' /> 
                    </div>
               </div>
               </a>

               <a href='https://medium.com/@mrzacsmith/working-with-the-github-api-for-the-first-time-a-beginners-tale-98652ad1b342'>
               <div className="blog-container">
                    <img src={octocat} alt='github' className="blog-image"/>
                    <div className="blog-action">
                         <div className="blog-title">Working With a Github API</div>
                    </div>
               </div>
               </a>

               <a href='https://medium.com/@mrzacsmith/build-a-simple-weather-app-using-open-weather-map-using-vanilla-javascript-part-1-7aa014bff9ad'>
               <div className="blog-container">
                    <img src={weather} alt='weather' className="blog-image"/>
                    <div className="blog-action">
                         <div className="blog-title">Build a Weather App Using Vanilla JavaScript</div>
                    </div>
               </div>
               </a>

               <a href='https://medium.com/@mrzacsmith/a-week-in-the-life-of-a-lambda-school-team-leader-95ceeea54123'>
               <div className="blog-container">
               <img src={lambda} alt='lambda' className="blog-image" />
               <div className="blog-action">
                         <div className="blog-title">Life of a Lambda School Team Lead</div>
                    </div>
               </div>
               </a>

               <a href='https://medium.com/@mrzacsmith/a-discussion-on-greedy-algorithms-7ca75d8d1849'>
                 <div className="blog-container">
                    <img src={money} alt='money' className="blog-image" />
                    <div className="blog-action">
                         <div className="blog-title">Greedy Algorithms</div>
                    </div>
               </div>
               </a>

               <a href='https://medium.com/@mrzacsmith/how-to-kill-nodejs-hanging-processes-simply-in-linux-6cde8e864cc4'>
                <div className="blog-container">
                    <img src={nodej} alt='nodejs' className="blog-image" />
                    <div className="blog-action">
                         <div className="blog-title">How to Kill Node.JS Hanging Processes</div>
                    </div>
               </div>
               </a>
          
               <a href='https://medium.com/@mrzacsmith/using-the-what-does-trump-think-api-part-1-2633a922b899'>
               <div className="blog-container">
                    <img src={trump} alt='trump' className="blog-image"/>
                    <div className="blog-action">
                         <div className="blog-title">`What Does Trump Think` API: Part 1</div>
                    </div>
               </div>
               </a>

               <a href='https://medium.com/@mrzacsmith/using-the-what-does-trump-think-api-part-2-96a58ff3046'>
               <div className="blog-container">
                    <img src={trump} alt='trump' className="blog-image"/>
                    <div className="blog-action">
                         <div className="blog-title">`What Does Trump Think` API: Part 2</div>
                    </div>
               </div>
               </a>



          </div>

          {/* <a href='https://medium.com/@mrzacsmith' /> 
          <a href='https://medium.com/@mrzacsmith/working-with-the-github-api-for-the-first-time-a-beginners-tale-98652ad1b342' />
          <a href='https://medium.com/@mrzacsmith/build-a-simple-weather-app-using-open-weather-map-using-vanilla-javascript-part-1-7aa014bff9ad' />
          <a href='https://medium.com/@mrzacsmith/a-week-in-the-life-of-a-lambda-school-team-leader-95ceeea54123' />
          <a href='https://medium.com/@mrzacsmith/a-discussion-on-greedy-algorithms-7ca75d8d1849' />
          <a href='https://medium.com/@mrzacsmith/how-to-kill-nodejs-hanging-processes-simply-in-linux-6cde8e864cc4' />
          <a href='https://medium.com/@mrzacsmith/using-the-what-does-trump-think-api-part-1-2633a922b899' />
          <a href='https://medium.com/@mrzacsmith/using-the-what-does-trump-think-api-part-2-96a58ff3046' /> */}

     </div>)
}

export default Blog;