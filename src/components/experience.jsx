import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
          <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Atlassian - Software Intern <span>May 2020-Aug 2020</span></h2>
                      <ul>
                        <li>Built full architecture and implementation for end-to-end notification service from scratch using AWS SQS and Lambdas</li>
                        <li>Provided customers with automated notifications via email and slack bot for events they had subscribed to</li>
                        <li>Created fully-automated CI/CD through bitbucket pipelines with unit-testing, linting, and deployment into various environments</li>
                      </ul>                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>NCR - Software Development Intern <span>May 2019-Aug 2019</span></h2>
                      <ul>
                        <li>Rewrote legacy back-end API of application (Aloha) used by thousands of restaurant managers across the US</li>
                        <li>Upgraded API to .NET Core from .NET Framework, and deployed application to Linux Docker running in Azure for better performance</li>
                        <li>Ran automated tests using Gatling on API calls such as logging in and executing stored procedures on restaurant databases</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Homeaway - Data Annotator <span>Jan 2019-July 2019</span></h2>
                      <ul>
                        <li>Annotated data and worked with text-based natural language processing</li>
                        <li>Contributed to team of full time employees with data prep and sequence to a sequence machine learning model</li>
                      </ul>                    
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Applied Research Laboratories - Science and Engineering Intern <span>Jun 2016-Aug 2018</span></h2>
                      <ul>
                        <li>Implemented a PostgreSQL database using normalization techniques for the Space and Geophysics Laboratory's inventory</li>
                        <li>Created data analysis tools using queries and views to make the previously cumbersome inventory system easy to use</li>
                        <li>Automated '.hdf5' system log file generation and parsing for real-time database inserts using C++ and Python</li>
                      </ul>                    
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>City of Austin IT Department (CTM) - Summer Intern <span>Jun 2016-Jul 2016</span></h2>
                      <ul>
                        <li>Led team of other interns in development of and Android application (Asyst) related to elderly care</li>
                        <li>Application connected citizens desiring a source of extra income with senior citizens in need of safe transportation and technical assistance</li>
                        <li>Utilized Android Studio (Java and XML) in order to develop application as well as Firebase for the back-end</li>
                      </ul>                    
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
