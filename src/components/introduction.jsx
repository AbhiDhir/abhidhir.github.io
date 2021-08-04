import React, { Component } from 'react'

export default class Introduction extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = window.VANTA.NET({
      el: this.vantaRef.current,
      mouseControls: false,
      touchControls: false,
      color: 0xbf5700,
      backgroundColor: 0xffffff,
      spacing: 19,
      scale: 1.00,
      scaleMobile: 1.00,
      speed: 2,
      forceAnimate: true,
      minHeight: window.innerHeight
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight" ref={this.vantaRef}>
            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi, I'm Abhi</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/AbhiDhir/Resume/blob/master/Abhi_Dhir_Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I'm a student at<br /> UT Austin</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/AbhiDhir" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
