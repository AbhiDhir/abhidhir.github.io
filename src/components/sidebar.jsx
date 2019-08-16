import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Abhi Dhir</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">HOME</a></li>
                  <li><a href="#about" data-nav-section="about">ABOUT</a></li>
                  <li><a href="#skills" data-nav-section="skills">SKILLS</a></li>
                  <li><a href="#experience" data-nav-section="experience">EXPERIENCE</a></li>
                  <li><a href="#projects" data-nav-section="projects">PROJECTS</a></li>
                  <li><a href="#education" data-nav-section="education">EDUCATION</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="mailto:adhir@utexas.edu" target="_blank" rel="noopener noreferrer"><i className="icon-mail"></i> adhir@utexas.edu</a></li>
                <li><a href="https://www.linkedin.com/in/abhi-dhir/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"/> abhi-dhir</a></li>
                <li><a href="https://www.github.com/AbhiDhir" target="_blank" rel="noopener noreferrer"><i className="icon-github"/> AbhiDhir</a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
