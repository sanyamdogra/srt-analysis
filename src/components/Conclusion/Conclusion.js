import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Fade from "react-reveal";

const styles = {
  containerClass: { paddingBottom: "1%", paddingTop: "2%" },
  colorClass: { color: "#2026D2" },
  boldClass: { fontWeight: "900" },
  imageContainerClass: { paddingTop: "20px" },
  selectContainerClass: { paddingBottom: "1%" }
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
              <p>These figures are for ODI, Test and First-class cricket.</p>
            </Col>
          </Row>
          <Row>
            <Col md="auto" className="pt-4 pb-4">
              <Fade delay={9000} left>
                <h4 style={{ color: "#2026D2" }}>
                  18426 + 15921 + 25396 ={" "}
                  <span style={{ fontWeight: "bold" }}>59743</span>
                </h4>
              </Fade>
              <ListGroup>
                <ListGroup.Item>
                  When you score as many runs as he has in ODI, Test and
                  First-class cricket as he has done, it makes him arguably the
                  greatest player ever.
                </ListGroup.Item>
                <ListGroup.Item>
                  Till date, he holds so many batting records.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="auto" className="pt-4">
              <Fade delay={9000} right>
                <h4 style={{ color: "#2026D2" }}>
                  463 + 200 + 310 ={" "}
                  <span style={{ fontWeight: "bold" }}>973</span>
                </h4>
              </Fade>
              <ListGroup>
                <ListGroup.Item>
                  Tendulkar has played more matches at the highest level than
                  any other player.
                </ListGroup.Item>
                <ListGroup.Item>
                  He has played in many forms of cricket and was consistent in
                  each one of them.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <p>
            <small>
              * This section has been formed with the help of external searches
              as well as with the data provided.
            </small>
          </p>
        </Container>
        <Container>
          <Row>
            <Col md={"auto"}>
              <h3
                style={{ fontWeight: "bold" }}
                className="justify-content-center pb-3"
              >
                Calmness, longevity, and consistency makes him{" "}
                <span style={{ color: "#F1295C" }}>the greatest.</span>
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Conclusion;
