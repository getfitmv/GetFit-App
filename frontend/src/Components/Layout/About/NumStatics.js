import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class NumStatics extends Component {
  state = {
    firstStart: 0,
    firstEnd: 60,

    secStart: 0,
    secEnd: 35,

    thirdStart: 0,
    thirdEnd: 90,

    lastStart: 0,
    lastEnd: 69
  };

  userSatsified = () => {
    if (this.state.firstStart < this.state.firstEnd) {
      this.setState({
        firstStart: this.state.firstStart + 1
      });
    }

    if (this.state.secStart < this.state.secEnd) {
      this.setState({
        secStart: this.state.secStart + 1
      });
    }

    if (this.state.thirdStart < this.state.thirdEnd) {
      this.setState({
        thirdStart: this.state.thirdStart + 1
      });
    }

    if (this.state.lastStart < this.state.lastEnd) {
      this.setState({
        lastStart: this.state.lastStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.userSatsified();
    });
  }
  render() {
    return (
      <div className="num-container">
        <Fade onReveal={() => this.userSatsified()}>
          <div className="num-card numbers">
            <span>{this.state.firstStart}+</span>
            <span>Years of Service</span>
          </div>

          <div className="num-card numbers">
            <span>{this.state.secStart}+</span>
            <span>Years of Service</span>
          </div>

          <div className="num-card numbers">
            <span>{this.state.thirdStart}+</span>
            <span>Years of Service</span>
          </div>

          <div className="num-card numbers">
            <span>{this.state.lastStart}%</span>
            <span>Years of Service</span>
          </div>
        </Fade>
      </div>
    );
  }
}
