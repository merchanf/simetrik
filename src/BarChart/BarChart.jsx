import React from "react";
import { XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeriesCanvas } from "react-vis";
import './BarChart.css';

const getLineSeries = (data) => {
  return data.map( (d, i) => <LineSeriesCanvas
    key={i}
    data={d.data}
  />);
}

const BarChart = ({data, title}) => {
  return (
    <section id="BarChart">
      <h1>{title}</h1>
      <XYPlot 
        width={300} 
        height={300}
        xType="ordinal"
      >
          <HorizontalGridLines style={{stroke: '#B7E9ED'}}/>
          <VerticalGridLines style={{stroke: '#B7E9ED'}}/>
          <XAxis/>
          <YAxis />
          {getLineSeries(data)}
        </XYPlot>
    </section>
  )
}

export default BarChart;