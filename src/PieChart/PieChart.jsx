import React from "react";
import { RadialChart, DiscreteColorLegend } from "react-vis";
import './PieChart.css';

const PieChart = ({data, title, showLabels}) => {
  return (
    <section id="PieChart">
      <h1>{title}</h1>
      <RadialChart
        height={400}
        width={400}
        data={data.map(d => ({angle: d.amount, label: `${d.amount}`}))}
        labelsRadiusMultiplier={1.2}
        labelsStyle={{
          fontSize: 16
        }}
        showLabels = {showLabels}
      />
      <DiscreteColorLegend items={data.map(d => d.label)} />
    </section>
  )
}

export default PieChart;