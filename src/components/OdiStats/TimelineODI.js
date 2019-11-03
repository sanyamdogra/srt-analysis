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
  containerClass: { paddingTop: "3%", paddingBottom: "3%" },
  warningClass: { color: "red", fontWeight: "900" },
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
        <div className="d-xl-none  pt-3 red" style={styles.warningClass}>
          Please switch to a larger screen to view the Timeline!
        </div>
        <div className="d-none d-xl-block">
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
      </div>
    );
  }
}

export default TimelineODI;
