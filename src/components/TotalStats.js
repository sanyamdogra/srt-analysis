import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTile from "./CardTile";
import Fade from "react-reveal";

export class TotalStats extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3 style={{ fontWeight: "bold" }} fontWeight="bold">
            Total <span style={{ color: "#F1295C" }}>Stats</span>
          </h3>
          <Row className="justify-content-md-center">
            <Col sm="true">
              <Fade left delay={9000}>
                <div className="p-3">
                  <CardTile />
                </div>
              </Fade>
            </Col>
            <Col sm="true">
            <Fade delay={9000}>
              <div className="p-3">
                <CardTile />
              </div>
              </Fade>
            </Col>
            <Col sm="true">
              <Fade right delay={9000}>
                <div className="p-3">
                  <CardTile />
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TotalStats;
