import React, { Component } from "react";

import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  YAxis,
  Tooltip
} from "recharts";
import { Container } from "react-bootstrap";

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
          <LineChart width={400} height={200} data={this.props.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="12 12" />
            <Line
              type="monotone"
              dataKey="runs"
              stroke="#2026D2"
              strokeWidth="3"
              strokeOpacity="0.85"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          <div style={styles.labelClass}>Total Matches</div>
        </Container>

        {/* <CalculatedStats team={props.team}/> */}
      </div>
    );
  }
}

export default Analysis;
