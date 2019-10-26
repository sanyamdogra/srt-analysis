import React, { Component } from "react";
import { Container } from "react-bootstrap";

const styles = {
    containerClass: { "padding-bottom":"2%","padding-top":"2%" },
    colorClass: { color: "#2026D2" },
    boldClass: { "font-weight": "900" },
    imageContainerClass:{"padding-top": "20px"}
  };

export class TeamAnalysis extends Component {
  render() {
    return (
      <div>
      <Container style={styles.containerClass}>
        <h3 style={{ fontWeight: "bold" }} fontWeight="bold">
          Team-wise <span style={{ color: "#2026D2" }}>Analysis</span>
        </h3>
        <p>Work in Progress!</p>
        </Container>
      </div>
    );
  }
}

export default TeamAnalysis;
