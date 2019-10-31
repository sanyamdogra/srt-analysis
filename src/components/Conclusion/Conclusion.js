import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  containerClass: { paddingBottom: "2%", paddingTop: "2%" },
  colorClass: { color: "#2026D2" },
  boldClass: { fontWeight: "900" },
  imageContainerClass: { paddingTop: "20px" },
  selectContainerClass: { paddingBottom: "4%" }
};

export class Conclusion extends Component {
  render() {
    return (
      <div>
        <Container style={styles.containerClass}>
          <h3 style={{ fontWeight: "bold" }} fontWeight="bold">
            Conclusion <span style={{ color: "#2026D2" }}>Points</span>
          </h3>
        </Container>

        <Container style={styles.selectContainerClass}>
          <Row>
            <Col md="auto">
              <p>
              Work in Progress!
                {/* Tendulkar gave character, inspiration and confidence to the
                future generation. He taught how to fight fire with fire and his
                ‘desert storm’ in Sharjah in 1998 made every Indian stand with
                pride. When a match started, every Indian believed that they can
                win. It is this confidence that Tendulkar injected into the
                fibre of not just the cricket team but also to the whole nation.
                He backed up his consistency on the field with a dignified
                conduct outside the field. This is what Tendulkar has given in
                addition to all the other traditional measures that great
                players are evaluated. Look at the Australian, Windies,
                Srilanka, South Africa teams today. They don’t have the same
                confidence that the Indian team has today. */}
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="auto"></Col>
            <Col xs={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Conclusion;
