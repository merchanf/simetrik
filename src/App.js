import React, {useState} from 'react';
import PieChart from "./PieChart/PieChart";
import BarChart from "./BarChart/BarChart";
import Board from "./Board/Board";
import './App.css';

const pieChartData = [
    {
      amount: 161621.69,
      label: "Approved"
    },
    {
      amount: 27645.85,
      label: "Pending"
    },
    {
      amount: 53722.73,
      label: "Rejected"
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

  const [selected, setSelected] = useState(2);

  return (
    <div id="Simetrik">
      <h1 className="title">
        <button onClick={() => setSelected(2)}>Ejercicio 2</button> |
        <button onClick={() => setSelected(3)}>Ejercicio 3</button>
      </h1>
      {selected === 2 && <div className="ejercicio-2">
        <Board data={selectData}/>
      </div>}
      {selected === 3 && <div className="ejercicio-3">
        <BarChart data={BarChartData} title="Suma de total_items" showLabels/>
        <PieChart data={pieChartData} title="Suma de total_amount por status" showLabels/>
      </div>}
    </div>
  );
}

export default App;
//<BarChart data={BarChartData} title="Suma de total_items" showLabels/>
//<PieChart data={pieChartData} title="Suma de total_amount por status" showLabels/>