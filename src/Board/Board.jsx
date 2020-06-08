import React, {useState, useRef} from "react";
import Select from "./Select/Select";
import Draggable from "./Draggable/Draggable"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'
import './Board.scss';
import useDeepEffect from "../useDeepEffect";

const Board = ({data}) => {
  //const [sortables, setSortables] = useState([]);
  const sortables = useRef([])
  const [selected, setSelected] = useState();
  const [sorted, setSorted] = useState();

  useDeepEffect(() => {
    "hola";
  }, [sortables]);

  const handleOk = () => {
    if(selected)
      console.log("selected", selected);
    else
      console.log("No selected items");

    if(sorted)
      console.log("Sorting criteria", sorted);
    else
    console.log("No sorting criteria defined");
  }

  /*const onSelectSecond = (values) => {
    sortables.current = values;
  }*/

  return(
    <section id="Board">
      <div className="column-1">
        <h1>¿Qué columnas se repiten?</h1>
        <Select data={data} onSelected={setSelected}/>
      </div>
      <div className="column-2">
        <h1>¿Cómo quieres ordenarlos?</h1>
        <div className="sort">
          <DndProvider backend={HTML5Backend}>
            <Draggable data={sortables.current} onChange={setSorted}/>
          </DndProvider>
        </div>
        <div className="select-2">
          <Select data={data} inverse ref={sortables}/> 
        </div>
        <div className="buttons">
          <button className="cancelar">Cancelar</button>
          <button className="ok" onClick={handleOk}>ok</button>
        </div>
      </div>
      
    </section>
  );
}

export default Board;

//<Select data={data} title="¿Qué columnas se repiten?"/>