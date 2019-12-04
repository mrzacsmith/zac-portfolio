import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LandingPage from './components/LandingPage'
import Blog from './components/Blog'


function App() {
  return (
    <div className="App">

        <div>
        <Route to='/' component={LandingPage} />
        <Route to='/about' component={AboutMe} />
        <Route to='/projects' component={Projects} />
        <Route to='/blog' component={Blog} />
        <Route to='/contact' component={Contact} />
        </div>

    </div>
  );
}

export default App;
