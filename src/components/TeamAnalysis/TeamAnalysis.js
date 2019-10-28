import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectTeam from "./SelectTeam";
import TeamLineGraph from "./TeamLineGraph";

const styles = {
  containerClass: { paddingBottom: "2%", paddingTop: "2%" },
  colorClass: { color: "#2026D2" },
  boldClass: { fontWeight: "900" },
  imageContainerClass: { paddingTop: "20px" }
};

export class TeamAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeamParent: "Australia"
  };
     }
  setTeam = selectedTeam => {
    this.setState({
      selectedTeamParent: selectedTeam.value
    });
    console.log(this.state.selectedTeamParent);
  };

  render() {
    return (
      <div>
        <Container style={styles.containerClass}>
          <h3 style={{ fontWeight: "bold" }} fontWeight="bold">
            Team-wise <span style={{ color: "#2026D2" }}>Analysis</span>
          </h3>
        </Container>
        <Container>
          <Row>
            <Col md="auto">
              <h6>Selected Team: </h6>
            </Col>
            <Col xs={6}>
              <SelectTeam callbackFromParent={this.setTeam} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={8}>
              <TeamLineGraph team={this.state.selectedTeamParent} />
            </Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TeamAnalysis;
