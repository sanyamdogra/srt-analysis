import React from "react";
import { getSummarizedStats } from "../../model/functions";
import ListGroup from "react-bootstrap/ListGroup";

const styles = {
  primaryBoldColorClass: { color: "#2026D2", fontWeight: "bold" },
  secondaryBoldColorClass: { color: "#F1295C", fontWeight: "bold" }
};

const TeamwiseStats = props => {
  const res = getSummarizedStats(props.team);
  return (
    <div>
      <p className="pt-3">
        Team-wise summary of Sachin Tendulkar's performance is given below,
        <br />
      </p>
      <ListGroup>
        <ListGroup.Item>
          He has scored{" "}
          <span style={styles.primaryBoldColorClass}>{res.totalRuns}</span> runs
          against{" "}
          <span style={styles.secondaryBoldColorClass}>{props.team}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          He even took{" "}
          <span style={styles.primaryBoldColorClass}>{res.totalWickets}</span>{" "}
          wickets.
        </ListGroup.Item>
        <ListGroup.Item>
          He was a great fielder and took{" "}
          <span style={styles.primaryBoldColorClass}>{res.totalCatches}</span>{" "}
          catches against them.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TeamwiseStats;
