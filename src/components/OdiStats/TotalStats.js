import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTile from "./CardTile";
import Fade from "react-reveal";
import Analysis from "../Analysis";

export class TotalStats extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3 style={{ fontWeight: "bold" }} fontWeight="bold">
            ODI <span style={{ color: "#F1295C" }}>Stats</span>
          </h3>
          <Row className="justify-content-md-left">
            <Col sm="true">
              <Fade left delay={9000}>
                <div className="p-3">
                  <CardTile header="Total Runs" info="18426" />
                </div>
              </Fade>
            </Col>
            <Col sm="true">
              <Fade delay={9000}>
                <div className="p-3">
                  <CardTile header="Highest Score" info="200*" />
                </div>
              </Fade>
            </Col>
            <Col sm="true">
              <Fade right delay={9000}>
                <div className="p-3">
                  <CardTile header="Batting Avg" info="44.8" />
                </div>
              </Fade>
            </Col>
            <Col sm="true">
              <div className="p-3">
                <Analysis />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TotalStats;
