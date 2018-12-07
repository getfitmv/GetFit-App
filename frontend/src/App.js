import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Store/Actions/auth";
import MainPage from "./Components/Pages/MainPage";
import "./Resources/CSS/Styles.css";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return <MainPage />;
  }
}

export default App;
