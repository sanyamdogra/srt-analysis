import React, { Component } from "react";
import { LineChart, XAxis, CartesianGrid, Line, YAxis } from "recharts";

const data = [
  { uv: "400", pv: "450" },
  { uv: "422", pv: "440" },
  { uv: "200", pv: "450" },
  { uv: "10", pv: "250" },
  { uv: "400", pv: "450" }
];

export class Analysis extends Component {
  render() {
    return (
      <div>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="12 12" />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#e91e63"
            strokeWidth="3"
            strokeOpacity="0.85"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}

export default Analysis;
