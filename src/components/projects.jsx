import React, { Component } from 'react'
import axios from 'axios'

export default class Projects extends Component {
    constructor(){
        super();
        this.state = {resp : []}
    }
    componentDidMount(){
        console.log('Mount Occurred');
        axios.get('https://api.github.com/users/AbhiDhir/starred')
        .then(response => this.setState({resp : response.data}));
    }

    render() {
    var currentState = this.state.resp;
    var names = [];
    var descs = [];
    var urls = [];
    for(var i in currentState){
        names.push(currentState[i].name);
        descs.push(currentState[i].description);
        urls.push(currentState[i].html_url);
    }
    
    return (
      <div>
      <section className="colorlib-services" data-section="projects">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Projects</span>
              <h2 className="colorlib-heading">Pinned Work From Github</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">                
                <a href={urls[0]} target="_blank" rel="noopener noreferrer"><h3>{names[0]}</h3></a>
                  <p>{descs[0]}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <a href={urls[1]} target="_blank" rel="noopener noreferrer"><h3>{names[1]}</h3></a>
                  <p>{descs[1]}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <a href={urls[2]} target="_blank" rel="noopener noreferrer"><h3>{names[2]}</h3></a>
                  <p>{descs[2]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-pt-md">  
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <a href={urls[3]} target="_blank" rel="noopener noreferrer"><h3>{names[3]}</h3></a>
                  <p>{descs[3]}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <a href={urls[4]} target="_blank" rel="noopener noreferrer"><h3>{names[4]}</h3></a>
                  <p>{descs[4]}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <a href={urls[5]} target="_blank" rel="noopener noreferrer"><h3>{names[5]}</h3></a>
                  <p>{descs[5]}</p>
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
