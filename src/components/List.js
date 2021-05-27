import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

function List(props) {
  const items = useSelector((state) => state);
  return (
    <ul>
      {items.map((item) => (
        <ListItem item={item} key={item.id}></ListItem>
      ))}
    </ul>
  );
}

export default List;

// <button onClick={myFunction(params)}></button>
// <button onClick={()=>{myFunction(params)}}></button>
