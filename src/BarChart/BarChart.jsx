import React from "react";
import { XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LabelSeries,
  LineSeriesCanvas } from "react-vis";
import './BarChart.css';

const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));

const getLineSeries = (data) => {
  return data.map( (d, i) => <LineSeriesCanvas
    key={i}
    data={d.data}
  />);
}

const BarChart = ({data, title, showLabels}) => {
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