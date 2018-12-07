import React, { Component } from "react";

import Header from "../Layout/Header/Header";
import { Element } from "react-scroll";
import MainSlider from "../Layout/Feature/MainSlider";
import VunueNfo from "../Layout/Trainers/Trainers";
import Highlights from "../Layout/About/About";
import Services from "../Layout/Services/Services";
import Reviews from "../Layout/Reviews/Reviews";
import Footer from "../Layout/Footer/Footer";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/auth";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <Element name="Featured">
          <MainSlider />
        </Element>

        <Element name="About">
          <Highlights />
        </Element>

        <Element name="Services">
          <Services />
        </Element>

        <Element name="Trainers">
          <VunueNfo />
        </Element>

        <Element name="Reviews">
          <Reviews />
        </Element>
        <Element name="Info">
          <Footer />
        </Element>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MainPage)
);
