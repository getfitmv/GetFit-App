import React, { Component } from "react";
import "./Resources/CSS/Styles.css";
import Header from "./Components/Layout/Header/Header";
import { Element } from "react-scroll";
import MainSlider from "./Components/Layout/Feature/MainSlider";
import VunueNfo from "./Components/Layout/Trainers/Trainers";
import Highlights from "./Components/Layout/About/About";
import Services from "./Components/Layout/Services/Services";
import Reviews from "./Components/Layout/Reviews/Reviews";
import Footer from "./Components/Layout/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: " 	#34495E" }}>
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

export default App;
