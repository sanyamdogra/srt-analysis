import React, { Component } from "react";
import Fade from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import stats from "../assets/stats.svg";

export class QuoteBoard extends Component {
  render() {
    return (
      <div>
        <Fade delay={9000}>
          <div className="p-3">
            <Container>
              <Row>
                <Col sm={8}>
                  <h4 className="quote-header">
                    “Sachin Tendulkar is a former Indian cricketer, widely
                    regarded to be the greatest cricketer of all time.”
                  </h4>
                  <Col md={{ span: 4, offset: 4 }}>
                    <h5>- Statistics</h5>
                  </Col>
                </Col>
                <Col sm={4}>
                  {" "}
                  <img
                    alt=""
                    src={stats}
                    width="470"
                    height="470"
                    className=""
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>
      </div>
    );
  }
}

export default QuoteBoard;
