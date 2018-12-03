import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SideMenuDrawer from "./SideMenuDrawer";

export default class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.headerHandler);
  }

  headerHandler = () => {
    if (window.scrollY > 0) {
      this.setState({ headerShow: true });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  toggleDrawer = event => {
    this.setState({
      drawerOpen: event
    });
  };

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "#FFFFFF" : "transparent",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <Toolbar style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
              <div className="header-logo">logo</div>
            </div>

            <IconButton
              aria-label="Menu"
              style={{ color: "#2a3444" }}
              //   onClick={()}
            >
              <AccountCircle />
            </IconButton>

            <IconButton
              aria-label="Menu"
              style={{ color: "#2a3444" }}
              onClick={() => this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <SideMenuDrawer
              open={this.state.drawerOpen}
              onClose={event => this.toggleDrawer(event)}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
