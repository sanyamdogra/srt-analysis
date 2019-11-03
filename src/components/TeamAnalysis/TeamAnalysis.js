import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectTeam from "./SelectTeam";
import TeamLineGraph from "./TeamLineGraph";
import TeamPieChart from "./TeamPieChart";
import TeamwiseStats from "./TeamwiseStats";

const styles = {
  containerClass: { paddingBottom: "2%", paddingTop: "2%" },
  primaryColorClass: { color: "#2026D2" },
  boldClass: { fontWeight: "bold" },
  selectContainerClass: { paddingBottom: "4%" }
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
  };

  render() {
    return (
      <div>
        <Container style={styles.containerClass}>
          <h3 style={styles.boldClass}>
            Team-wise <span style={styles.primaryColorClass}>Analysis</span>
          </h3>
        </Container>

        <Container style={styles.selectContainerClass}>
          <Row>
            <Col md="auto">
              <p>
                Select your desired team from the list to visualize Sachin
                Tendulkar's performance with them.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <h6 style={styles.boldClass}>Selected Team: </h6>
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
            <Col sm={4}>
              <TeamPieChart team={this.state.selectedTeamParent} />
            </Col>
          </Row>
          <Container style={styles.selectContainerClass}>
            {" "}
            <TeamwiseStats team={this.state.selectedTeamParent} />
          </Container>
        </Container>
      </div>
    );
  }
}

export default TeamAnalysis;
