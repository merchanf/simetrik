import React, {useState, useEffect} from "react";
import Select from "./Select/Select";
import Draggable from "./Draggable/Draggable"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'
import './Board.scss';

const Board = ({data}) => {
  const [sortables, setSortables] = useState([]);

  useEffect(() => {

  });

  const onSelectFirst = (values) => {
    console.log(values);
  }

  const onSelectSecond = (values) => {
    setSortables(values);
  }

  const onSortChange = (value) => {
    console.log(value);
  }

  return(
    <section id="Board">
      <div className="column-1">
        <h1>¿Qué columnas se repiten?</h1>
        <Select data={data} onSelected={onSelectFirst}/>
      </div>
      <div className="column-2">
        <h1>¿Cómo quieres ordenarlos?</h1>
        <div className="sort">
          <DndProvider backend={HTML5Backend}>
            <Draggable data={sortables} onChange={onSortChange}/>
          </DndProvider>
        </div>
        <div className="select-2">
          <Select data={data} inverse onSelected={onSelectSecond}/> 
        </div>
        <div className="buttons">
          <button className="cancelar">Cancelar</button>
          <button className="ok">ok</button>
        </div>
      </div>
      
    </section>
  );
}

export default Board;

//<Select data={data} title="¿Qué columnas se repiten?"/>