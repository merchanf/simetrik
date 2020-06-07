import React from "react";
import Select from "./Select/Select";
import './Board.scss';

const Board = ({data}) => {

  return(
    <section>
      <Select data={data} title="¿Qué columnas se repiten?"/>
    </section>
  );
}

export default Board;