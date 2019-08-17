import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
          <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Skills</span>
              <h2 className="colorlib-heading animate-box">Areas of Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <h3 className="skillsfield">Programming Languages</h3>
                <div className="row">
                    <div className="col-md-4">
                        <img className="iconbox" src="images/java.png" alt="Java"></img>
                    </div>
                    <div className="col-md-4">
                        <img className="iconbox" src="images/python.png" alt="Python"></img>
                    </div>
                    <div className="col-md-4">
                        <img className="iconbox" src="images/cplus.png" alt="C++"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" >
                        <img className="iconbox" src="images/sql.png" alt="SQL"></img>
                    </div>
                    <div className="col-md-6">
                        <img className="iconbox" src="images/csharp.png" alt="C#"></img>
                    </div>
                </div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <h3 className="skillsfield">Web/Mobile Development</h3>
                <div className="row">
                    <div className="col-md-4">
                        <img className="iconbox" src="images/html.png" alt="HTML"></img>
                    </div>
                    <div className="col-md-4">
                        <img className="iconbox" src="images/css.png" alt="CSS"></img>
                    </div>
                    <div className="col-md-4">
                        <img className="iconbox" src="images/android.png" alt="Android"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" >
                        <img className="iconbox" src="images/react.png" alt="React JS"></img>
                    </div>
                    <div className="col-md-6">
                        <img className="iconbox" src="images/javascript.png" alt="Javascript"></img>
                    </div>
                </div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <h3 className="skillsfield">Other</h3>
                <div className="row">
                    <div className="col-md-4">
                        <img className="iconbox" src="images/git.png" alt="Git"></img>
                    </div>
                    <div className="col-md-4">
                        <img className="iconbox" src="images/aspnet.svg" alt="ASP.NET"></img>
                    </div>
                    <div className="col-md-4">
                        <img className="iconbox" src="images/azure.svg" alt="Microsoft Azure"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" >
                        <img className="iconbox" src="images/tex.png" alt="Latex"></img>
                    </div>
                    <div className="col-md-6">
                        <img className="iconbox" src="images/net.png" alt="x86"></img>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
