import React from "react";
import * as Recharts from "recharts";
import { getMatchResultsPerTeam } from "../../model/functions";
import "../../App.css";

const { PieChart, Pie, Cell, Tooltip } = Recharts;

const TeamPieChart = props => {
  const result = getMatchResultsPerTeam(props.team);
  const data = [
    { name: "Wins", value: result.won },
    { name: "Loses", value: result.lost },
    { name: "Draw", value: result.draw }
  ];

  const COLORS = ["#2026D2", "#F1295C", "#62E0FB"];

  return (
    <React.Fragment>
      <div className="pie-info-heading">
        Match<span style={{ color: "#2026D2" }}> Stats</span>
      </div>
      <div className="pie-info">
        <div
          className="ssp-400"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <div
            className="pie-color"
            style={{ backgroundColor: "#2026D2", marginRight: "10px" }}
          />
          Won
        </div>
        <div
          className="ssp-400"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <div
            className="pie-color"
            style={{ backgroundColor: "#F1295C", marginRight: "10px" }}
          />
          Lost
        </div>
        <div
          className="ssp-400"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <div
            className="pie-color"
            style={{ backgroundColor: "#62E0FB", marginRight: "10px" }}
          />
          Draw
        </div>
      </div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={190}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={5}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              dataKey={entry.value}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
    </React.Fragment>
  );
};

export default TeamPieChart;
