import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
           <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Where I've Gone to School</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><b>University of Texas at Austin</b> - Pursuing BS in Computer Science and Mathematics
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="school-text">
                                <li><b>Relevant Courses Taken:</b> Computer Architecture, Probability, Data Structures, Vector Calculus, Matrics, Discrete Mathematics</li>
                                <li><b>Currently Taking:</b> Operating Systems, Mathematical Statistics, Differential Equations</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="education">
                                <li><i>Aug 2018 - Exp. May 2022</i></li>
                                <li><i>Cumulative GPA: 4.0</i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><b>Liberal Arts and Science Academy</b> - High School
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                      <div className="row">
                          <div className="col-md-6">
                            <ul className="school-text">
                                <li>Top ranked magnet school in Texas, with a focus on STEM</li>
                                <li><b>Relevant Activities: </b> Computer Science Club, CyberPatriot, Science Olympiad</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="education">
                                <li><i>Aug 2014 - May 2018</i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
