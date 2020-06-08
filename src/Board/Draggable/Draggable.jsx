import React, { useState, useCallback, useEffect } from 'react'
import { Item } from '../Item/Item';
import update from 'immutability-helper'
import useDeepEffect from '../../useDeepEffect';


export const Draggable = ({data, onChange}) => {

  const [items, setItems] = useState([]);

  useEffect(() =>{
    setItems(data.map( (el, i) => ({
      id: i,
      text: el,
      sort: "upwards"
    })));
  }, [data]);

  useDeepEffect(() => {
    if(onChange)
      onChange(items);
  }, [onChange, items, setItems])

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = items[dragIndex]
      setItems( update(items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }));
    },
    [items],
  )

  const handleSort = (id, upwards) => {
    let index = items.findIndex(e => e.id === id);
    setItems(prevValue => {
      prevValue[index]["sort"] = upwards ? "upwards" : "backwards";
      return prevValue;
    });
  }

  const renderItem = (item, index) => {
    return (
      <Item
        key={item.id}
        index={index}
        id={item.id}
        text={item.text}
        moveItem={moveCard}
        sort={handleSort}
      />
    )
  }
  return (<div id="Draggable">{items.map((item, i) => renderItem(item, i))}</div>);
}

export default Draggable;