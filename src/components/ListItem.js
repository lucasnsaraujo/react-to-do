import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../actions/listAction";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/checked.png" alt="Done" />;
  } else {
    return <img src="./assets/unchecked.png" alt="Undone" />;
  }
}

function ListItem(props) {
  const dispatch = useDispatch();
  return (
    <>
      <li key={props.item.id}>
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <div className="buttons">
            <button
              onClick={() => {
                dispatch(deleteItem(props.item.id));
              }}
            >
              <img src="./assets/delete.png" alt="Delete" />
            </button>
            <button
              onClick={() => {
                dispatch(changeDone(props.item.id));
              }}
            >
              <DoneImg done={props.item.done}></DoneImg>
            </button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default ListItem;
