import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTile from "./CardTile";
import Fade from "react-reveal";
import ListGroup from "react-bootstrap/ListGroup";

import {
  getTotalStats,
  getRunsPerInnings,
  getTotalWinsSRT
} from "../../model/functions";
import TimelineODI from "./TimelineODI";

const styles = {
  containerClass: { paddingBottom: "2%" },
  primaryColorClass: { color: "#2026D2" },
  secondaryColorClass: { color: "#F1295C" },
  primaryBoldColorClass: { color: "#2026D2", fontWeight: "bold" },
  secondaryBoldColorClass: { color: "#F1295C", fontWeight: "bold" },
  boldClass: { fontWeight: "bold" }
};

const TotalStats = () => {
  let data = getTotalStats();
  let inningsRuns = getRunsPerInnings();
  let wins = getTotalWinsSRT();

  return (
    <div>
      <Container style={styles.containerClass}>
        <h3 style={styles.boldClass}>
          ODI <span style={styles.primaryColorClass}>Timeline</span>
        </h3>
        <div>
          <TimelineODI data={inningsRuns} />
        </div>
        <p className="pt-4">
          This is the whole ODI timeline for Sachin Tendulkar. It is full of
          high peaks which are a great symbol of the significant contribution he
          has made for Team India. It has a total of 463 matches. <br />
          This looks a bit cluttered so let's{" "}
          <span style={styles.primaryColorClass}>analyze</span> it.
        </p>
      </Container>
      <Container>
        <h3 style={styles.boldClass}>
          ODI <span style={styles.secondaryColorClass}>Stats</span>
        </h3>
        <Row className="justify-content-md-center">
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
        </Row>
        <p className="pt-3">
          After my detailed analysis of the ODI data, I found that
          <br />
        </p>
        <ListGroup>
          <ListGroup.Item>
            India won{" "}
            <span style={styles.primaryBoldColorClass}>{wins.totalWins}</span>{" "}
            times when Sachin Tendulkar scored{" "}
            <span style={styles.secondaryBoldColorClass}>30+</span>.
          </ListGroup.Item>
          <ListGroup.Item>
            He is the first player to score{" "}
            <span style={styles.primaryBoldColorClass}>{data.maxRun}</span> in
            ODIs and that too not out.
          </ListGroup.Item>
          <ListGroup.Item>
            He has scored{" "}
            <span style={styles.primaryBoldColorClass}>
              {wins.totalCenturies}
            </span>{" "}
            centuries.
          </ListGroup.Item>
          <ListGroup.Item>
            He has scored{" "}
            <span style={styles.primaryBoldColorClass}>
              {wins.totalHalfCenturies}
            </span>{" "}
            half-centuries.
          </ListGroup.Item>
        </ListGroup>
        <p className="pt-3">
          These stats are enough to prove that he is{" "}
          <span style={styles.primaryBoldColorClass}>the GOD of Cricket</span>,
          if not then scroll more!
        </p>
      </Container>
    </div>
  );
};

export default TotalStats;
