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
  containerClass: {"padding-bottom":"20px"},
  colorClass: { color: "#2026D2" },
  boldClass: { "font-weight": "900" },
  imageContainerClass: { "padding-top": "20px" },
  labelClass: {
    position: "absolute",
    left: "45%",
    color: "#2026D2"
  }
};

export class TimelineODI extends Component {
  render() {
    return (
      <div>
        <Container style={styles.containerClass}>
          <LineChart width={1000} height={250} data={this.props.data}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 200]} />
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
      </div>
    );
  }
}

export default TimelineODI;
