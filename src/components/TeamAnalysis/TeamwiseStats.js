import React from "react";
import { getSummarizedStats } from "../../model/functions";
import ListGroup from "react-bootstrap/ListGroup";

const TeamwiseStats = props => {
  const res = getSummarizedStats(props.team);
  return (
    <div>
      <p className="pt-3">
        Team-wise summary of Sachin Tendulkar's performace is given below,
        <br />
      </p>
      <ListGroup>
        <ListGroup.Item>
          He has scored{" "}
          <span style={{ color: "#2026D2", fontWeight: "bold" }}>
            {res.totalRuns}
          </span>{" "}
          runs against{" "}
          <span style={{ color: "#F1295C", fontWeight: "bold" }}>
            {props.team}
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          He even took{" "}
          <span style={{ color: "#2026D2", fontWeight: "bold" }}>
            {res.totalWickets}
          </span>{" "}
          wickets.
        </ListGroup.Item>
        <ListGroup.Item>
          He was a great fielder and took{" "}
          <span style={{ color: "#2026D2", fontWeight: "bold" }}>
            {res.totalCatches}
          </span>{" "}
          catches against them.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TeamwiseStats;
