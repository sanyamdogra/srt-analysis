import React, { Component } from "react";
import "../../App.css";

const styles = {
  boldClass: { fontWeight: "bold" },
  heartColor: { color: "#62E0FB" }
};
export class FooterComponet extends Component {
  render() {
    return (
      <div class="footer">
        <div style={styles.boldClass}>Sachiiiiinn, Sachin!</div>
        Made with <span style={styles.heartColor}>❤</span> by Sanyam Dogra
      </div>
    );
  }
}

export default FooterComponet;
