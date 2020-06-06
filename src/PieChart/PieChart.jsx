import React from "react";
import { RadialChart } from "react-vis";
import './PieChart.css';

const PieChart = ({data, title, showLabels}) => {
  return (
    <section id="PieChart">
      <h1>{title}</h1>
      <RadialChart
        height={500}
        width={500}
        data={data.map(d => ({angle: d.amount, label: `${d.amount}`}))}
        labelsRadiusMultiplier={1.2}
        labelsStyle={{
          fontSize: 16
        }}
        showLabels = {showLabels}
      />
    </section>
  )
}

export default PieChart;