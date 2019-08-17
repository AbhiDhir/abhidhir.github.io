import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar> 
          <div id="colorlib-main">
           <Introduction></Introduction>
           <About></About>
           <Skills></Skills>
           <Experience></Experience>
           <Projects></Projects>
           <Education></Education>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
