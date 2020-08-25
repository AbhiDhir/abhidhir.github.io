import React, { Component } from 'react'

export default class Introduction extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { width: 0, height: 0 };
  //   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  // }
  
  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  //   this.effect = window.VANTA.NET({
  //     el: "#vanta-net",
  //     mouseControls: true,
  //     touchControls: true,
  //     color: 0xbf5700,
  //     backgroundColor: 0xffffff,
  //     spacing: 19,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     minHeight: this.state.height
  //   })
  // }
  
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }
  
  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight" style={{background: `url("images/background.jpg")`}}>
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
