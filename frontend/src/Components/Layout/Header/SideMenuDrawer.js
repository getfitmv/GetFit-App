import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { scroller } from "react-scroll";

const SideMenuDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -20
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav" className="nav-container">
        <ul className="navbar-menu -fillable">
          <li className="item">
            <a
              className="link"
              tabIndex="1"
              onClick={() => scrollToElement("Featured")}
            >
              Featured
            </a>
          </li>
          <li className="item">
            <a
              className="link"
              tabIndex="2"
              onClick={() => scrollToElement("About")}
            >
              About
            </a>
          </li>
          <li className="item">
            <a
              className="link"
              tabIndex="3"
              onClick={() => scrollToElement("Services")}
            >
              Services
            </a>
          </li>
          <li className="item">
            <a
              className="link"
              tabIndex="4"
              onClick={() => scrollToElement("Trainers")}
            >
              Trainers
            </a>
          </li>
          <li className="item">
            <a
              className="link"
              tabIndex="5"
              onClick={() => scrollToElement("Reviews")}
            >
              Reviews
            </a>
          </li>

          <li className="item">
            <a
              className="link"
              tabIndex="6"
              onClick={() => scrollToElement("Info")}
            >
              Info
            </a>
          </li>
        </ul>
      </List>
    </Drawer>
  );
};

export default SideMenuDrawer;
