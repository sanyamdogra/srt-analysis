import React from "react";
import * as Recharts from "recharts";
import { getRunsPerTeam } from "../../model/functions";

const { LineChart, Line, XAxis, YAxis, Tooltip } = Recharts;

const styles = {
  containerClass: { paddingTop: "3%", paddingBottom: "3%" },
  colorClass: { color: "#2026D2" },
  boldClass: { fontWeight: "900" },
  warningClass: { color: "red", fontWeight: "900", paddingBottom: "10%" }
};

const TeamLineGraph = props => {
  const data = getRunsPerTeam(props.team);
  return (
    <React.Fragment>
      <div
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          fontWeight: "bold"
        }}
      >
        Runs per match against{" "}
        <span style={{ color: "#2026D2" }}>{props.team}</span>
      </div>
      <div className="d-xl-none  pt-3 pd-3 red" style={styles.warningClass}>
        Please switch to a larger screen to view the Score vs Matches graph!
      </div>
      <div className="d-none d-xl-block pt-4">
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
          style={{
            color: "#171717",
            position: "relative",
            top: "5px",
            left: "47%"
          }}
        >
          Matches
        </span>
      </div>
    </React.Fragment>
  );
};

export default TeamLineGraph;
