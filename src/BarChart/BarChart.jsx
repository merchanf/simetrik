import React from "react";
import { XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeriesCanvas,
  DiscreteColorLegend } from "react-vis";
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
        width={800} 
        height={400}
        xType="ordinal"
      >
          <HorizontalGridLines style={{stroke: '#B7E9ED'}}/>
          <VerticalGridLines style={{stroke: '#B7E9ED'}}/>
          <XAxis/>
          <YAxis />
          {getLineSeries(data)}
        </XYPlot>
      <DiscreteColorLegend items={data.map(d => d.label)} />
    </section>
  )
}

export default BarChart;