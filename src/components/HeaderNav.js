import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import srtlogo from "../assets/stlogo.png";

import "../App.css";

export class HeaderNav extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="color" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src={srtlogo}
              width="50"
              height="50"
              className="d-inline-block align-top "
            />
            <span className="Header-text p-3">{"S R T"}</span>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderNav;
