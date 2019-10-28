import React from "react";
import * as Recharts from "recharts";
import { getRunsPerTeam } from "../../model/functions";

const { LineChart, Line, XAxis, YAxis, Tooltip } = Recharts;

const TeamLineGraph = props => {
  const data = getRunsPerTeam(props.team);
  console.log(props.team);
  return (
    <React.Fragment>
      <div
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          paddingTop: "2%",
          paddingBottom: "1%"
        }}
      >
        Runs per match against <span style={{ color: "#2026D2" }}>{props.team}</span>
      </div>
      <LineChart
        width={700}
        height={250}
        data={data}
        margin={{ top: 40, right: 30, left: 0, bottom: -10 }}
        className="ssp-400"
        style={{ color: "#e91e63" }}
      >
        <XAxis />
        <YAxis domain={[0, 200]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="runs"
          stroke="#e91e63"
          strokeWidth="3"
          strokeOpacity="0.85"
          activeDot={{ r: 8 }}
        />
      </LineChart>
      <span
        className="ssp-400"
        style={{
          color: "white",
          position: "absolute",
          bottom: "7px",
          left: "47%"
        }}
      >
        Matches
      </span>
    </React.Fragment>
  );
};

export default TeamLineGraph;
