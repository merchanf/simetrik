import React from 'react';
import PieChart from "./PieChart/PieChart";
import BarChart from "./BarChart/BarChart";
import Board from "./Board/Board";
import './App.css';

const pieChartData = [
    {
      amount: 161621.69,
      label: 161621.69
    },
    {
      amount: 27645.85,
      label: 27645.85
    },
    {
      amount: 53722.73,
      label: 27645.85
    }
];

const BarChartData = [
  {
    label: "Approved",
    data: [
      { x: "1/05/2020", y: 50 },
      { x: "2/05/2020", y: 5 },
      { x: "3/05/2020", y: 12 },
    ]
  },
  {
    label: "Pending",
    data: [
      { x: "1/05/2020", y: 0 },
      { x: "2/05/2020", y: 9 },
      { x: "3/05/2020", y: 0 },
    ]
  },
  {
    label: "Rejected",
    data: [
      { x: "1/05/2020", y: 5 },
      { x: "2/05/2020", y: 20 },
      { x: "3/05/2020", y: 2 },
    ]
  },
];

const selectData = [
  "SKT_ID",
  "ORDER_ID",
  "CREATION_DATE",
  "TOTAL_AMOUNT",
  "TOTAL_ITEMS",
  "USER_ID",
  "GATEWAY_REFERENCE",
  "STATUS",
  "BIN",
  "LAST4",
  "SKT_UNIQUENESS11",
  "SKT_UNIQUENESS12"
];

function App() {
  return (
    <Board data={selectData} title="hola"/>
  );
}

export default App;
//<BarChart data={BarChartData} title="Suma de total_items" showLabels/>
//<PieChart data={pieChartData} title="Suma de total_amount por status" showLabels/>