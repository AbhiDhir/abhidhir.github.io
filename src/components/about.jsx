import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a computer science and mathematics major at UT Austin. I love problem solving - and am interested in many areas of computer science, especially data science and cryptography. I am good at picking up new skills quickly and applying information to solve real-life problems. I am looking to be part of a dynamic team in the area of software development.</p>
                    <p>Currently I am a part of TSL (<a href="https://sites.utexas.edu/tsl/about/" target="_blank">Texas Spacecraft Laboratory</a>) which is a student-driven research group dedicated to designing and building hardware and software for space missions in conjunction with governmental organizations and/or private industries. I am also a part of ISSS (Information and Systems Security Society) which participates in CTFs and explores the realm of cybersecurity. </p>
                    </div>
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
