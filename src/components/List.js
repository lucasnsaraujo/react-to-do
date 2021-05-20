import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <ListItem
          item={item}
          onDoneItem={props.onDoneItem}
          onDeleteItem={props.onDeleteItem}
          key={item.id}
        ></ListItem>
      ))}
    </ul>
  );
}

export default List;

// <button onClick={myFunction(params)}></button>
// <button onClick={()=>{myFunction(params)}}></button>
