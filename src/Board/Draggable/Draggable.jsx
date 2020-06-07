import React, { useState, useCallback } from 'react'
import { Item } from '../Item/Item';
import update from 'immutability-helper'


export const Draggable = ({data, onChange}) => {

  const [items, setItems] = useState( data.map( (el, i) => ({
    id: i,
    text: el,
    sort: "upwards"
  })));
  
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = items[dragIndex]
      setItems( _ => {
        let temp = update(items, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
        if(onChange)
          onChange(temp);
        return temp;
      })
    },
    [items, onChange],
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