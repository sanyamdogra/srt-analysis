import React, { Component } from "react";

import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  YAxis,
  Tooltip
} from "recharts";
import { Container, Row, Col } from "react-bootstrap";
// import CalculatedStats from './CalculatedStats';

// const res = getSummarizedStats(props.team);

const data = [
  { uv: "400", pv: "450" },
  { uv: "422", pv: "440" },
  { uv: "200", pv: "450" },
  { uv: "10", pv: "250" },
  { uv: "400", pv: "450" }
];

const styles = {
  containerClass: { height: "200px", width: "200px" },
  colorClass: { color: "#2026D2" },
  boldClass: { "font-weight": "900" },
  imageContainerClass: { "padding-top": "20px" },
  labelClass: {
    position: "absolute",
    left: "70%",
    color: "#2026D2"
  }
};
export class Analysis extends Component {
  render() {
    return (
      <div>
        {/* <h3 style={{ fontWeight: "bold" }} fontWeight="bold">
          Yearly <span style={styles.colorClass}>Stats</span>
        </h3> */}
        <Container style={styles.containerClass}>
          <LineChart width={400} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="12 12" />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#2026D2"
              strokeWidth="3"
              strokeOpacity="0.85"
              activeDot={{ r: 8 }}
            />
            {/* <Line
              type="monotone"
              strokeWidth="3"
              dataKey="pv"
              stroke="#82ca9d"
            /> */}
          </LineChart>
          <div style={styles.labelClass}>Total Matches</div>
        </Container>

        {/* <CalculatedStats team={props.team}/> */}
      </div>
    );
  }
}

export default Analysis;
