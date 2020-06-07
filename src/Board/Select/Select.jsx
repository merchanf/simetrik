import React, {useState} from "react";
import { FiCheck } from "react-icons/fi";
import "./Select.scss";

const Select = ({data, title, onSelected, inverse}) => {

  const [lookup, setLookup] = useState("");
  const [selected, setSelected] = useState([]);

  /**
  * Funcion que maneja el evento de clic en los items de la lista
  * Al hacer clic en un elemento se debe resaltar, y al hacer clic
  * de nuevo debe volver a su estado original.
  * @param {*} _e variable que contiene los detalles del evento realizado
  * @param {*} item Item a ser evaluado
  */
  const handleOnClick = (_e, item) => {
    //Si existe hay que removerlo
    if(selected.includes(item))
      setSelected(selected.filter(s => s !== item))
    else //Si no existe hay que incluirlo
      setSelected([...selected, item]);
  }

  /**
   * Manejador del evento onChange para el buscador
   * @param {*} e variable que contiene los detalles del evento realizado
   */
  const handleOnChange = e => setLookup(e.target.value);

  /**
   * Funcion que maneja el color de fondo de los items seleccionados dependiendo de si el fondo
   * es púrpura o no, esto se maneja a través de la variable inverse. Recibe como parametro el 
   * elemento que será seleccionado y dependiendo de su estado añade el fondo púrpura o no.
   * @param {*} item 
   */
  const getClassname = (item) => {
    let includes = selected.includes(item);
    let className = includes ? "selected " : "not-selected ";
    if(includes)
      className += inverse ? " beige_bg" : " purple_bg";
    console.log(className);
    return className;
  }
  
  return (
    <div id="Select">
      {title && <h1>{title}</h1>}
      <input type="text" onChange={handleOnChange} placeholder="Buscar columna"/>
      <ul>
        {data.filter(d => d.includes(lookup)).map( (d, i) => 
        <li className={getClassname(d)} onClick={e => handleOnClick(e, d)} key={i}>
          <FiCheck />{d}
        </li>
        )}
      </ul>
    </div>
  );
}

export default Select;