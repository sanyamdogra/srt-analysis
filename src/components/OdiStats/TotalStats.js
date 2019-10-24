import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTile from "./CardTile";
import Fade from "react-reveal";
import Analysis from "../Analysis";

import { getTotalStats, getRunsPerInnings } from "../../model/functions";

const TotalStats = () => {
  let data = getTotalStats();
  let inningsRuns = getRunsPerInnings();
  console.log(inningsRuns);

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
                <CardTile header="Total Runs" info={data.totalRuns} />
              </div>
            </Fade>
          </Col>
          <Col sm="true">
            <Fade delay={9000}>
              <div className="p-3">
                <CardTile header="Highest Score" info={data.maxRun + "*"} />
              </div>
            </Fade>
          </Col>
          <Col sm="true">
            <Fade right delay={9000}>
              <div className="p-3">
                <CardTile header="Batting Avg" info={data.odiAvg} />
              </div>
            </Fade>
          </Col>
          <Col sm="true">
            <div className="p-3">
              <Analysis data={inningsRuns}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TotalStats;
