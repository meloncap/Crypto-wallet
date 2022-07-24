import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import "./styles.scss";

const Chart = ({ data }) => {
  return (
    <div className="chart-wrapper">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="priceUsd"
          stroke="rgba(220, 185, 98)"
          dot={false}
        />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Chart;
