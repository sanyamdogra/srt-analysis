import React, { Component } from "react";
import Fade from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import stats from "../../assets/stats.svg";

const styles = {
  containerClass: { paddingTop: "15%" },
  colorClass: { color: "#2026D2" },
  boldClass: { fontWeight: "900" },
  imageContainerClass: { paddingTop: "20%" }
};

export class QuoteBoard extends Component {
  render() {
    return (
      <div>
        <Fade delay={9000}>
          <Container className="container-quote">
            <Row>
              <Col sm={8}>
                <Container style={styles.containerClass}>
                  <div />
                  <h3 style={styles.boldClass}>
                    Sachin <span style={styles.colorClass}>Tendulkar,</span>
                  </h3>
                  <h4>
                    is a former Indian cricketer, widely regarded to be the
                    greatest cricketer of all time.
                  </h4>

                  <Col>
                    <h5
                      style={styles.colorClass}
                      className="float-sm-right pr-1"
                    >
                      - Statistics
                    </h5>
                  </Col>
                </Container>
              </Col>
              <Col sm={4}>
                {" "}
                <Container style={styles.imageContainerClass}>
                  <img alt="Stats" src={stats} width="350" height="250" />
                </Container>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
    );
  }
}

export default QuoteBoard;
