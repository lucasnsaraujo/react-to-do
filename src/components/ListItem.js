import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/checked.png" alt="Done" />;
  } else {
    return <img src="./assets/unchecked.png" alt="Undone" />;
  }
}

function ListItem(props) {
  return (
    <>
      <li key={props.item.id}>
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <div className="buttons">
            <button
              onClick={() => {
                props.onDeleteItem(props.item);
              }}
            >
              <img src="./assets/delete.png" alt="Delete" />
            </button>
            <button
              onClick={() => {
                props.onDoneItem(props.item);
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
