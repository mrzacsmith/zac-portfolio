import React from 'react';
import lambda from '../images/lambda.png'
import medium from '../images/medium.png'
import money from '../images/money.png'
import node from '../images/node.png'
import octocat from '../images/octocat.png'
import trump from '../images/trump.png'
import weather from '../images/weather.png'


function Blog(){


     return(<div>Hello this is the blog


          <div className='blog-icons'>
               <img src={lambda} alt='lambda' />
               <img src={medium} alt='medium' />

               <div className="blog-icon-container">
                    <img src={money} alt='money' />
                    <div className="blog-anchor">
                         <div className="text">Greedy Algorithms</div>
                         {/* <button>Greedy Algorithms</button> */}
                    </div>
               </div>
               
               
               
               <img src={node} alt='nodejs' />
               <img src={octocat} alt='github' />
               <img src={trump} alt='trump' />
               <img src={weather} alt='weather' />
               <img src={trump} alt='trump' />
          </div>

          <a href='https://medium.com/@mrzacsmith' /> 
          <a href='https://medium.com/@mrzacsmith/working-with-the-github-api-for-the-first-time-a-beginners-tale-98652ad1b342' />
          <a href='https://medium.com/@mrzacsmith/build-a-simple-weather-app-using-open-weather-map-using-vanilla-javascript-part-1-7aa014bff9ad' />
          <a href='https://medium.com/@mrzacsmith/a-week-in-the-life-of-a-lambda-school-team-leader-95ceeea54123' />
          <a href='https://medium.com/@mrzacsmith/a-discussion-on-greedy-algorithms-7ca75d8d1849' />
          <a href='https://medium.com/@mrzacsmith/how-to-kill-nodejs-hanging-processes-simply-in-linux-6cde8e864cc4' />
          <a href='https://medium.com/@mrzacsmith/using-the-what-does-trump-think-api-part-1-2633a922b899' />
          <a href='https://medium.com/@mrzacsmith/using-the-what-does-trump-think-api-part-2-96a58ff3046' />

     </div>)
}

export default Blog;