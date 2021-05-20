import React, { useEffect, useState } from "react";
import "./Todo.css";
import List from "./components/List";
import Form from "./components/Form";
import Item from "./components/Item";
import Modal from "./components/Modal";

function Todo() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem("savedItems"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []); // array vazio avisa que só checa quando o componente for carregado)

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items));
  }, [items]); // array com items, verifica se houve alteração no items

  function onAddItem(item) {
    let todoItem = new Item(item);
    setItems([...items, todoItem]);
    onHideModal();
  }

  function onDeleteItem(itemToBeDeleted) {
    let updatedItems = items.filter(
      (itemInArray) => itemToBeDeleted.id !== itemInArray.id
    );
    setItems(updatedItems);
  }

  function onDoneItem(itemDone) {
    let updatedItems = items.map((itemInArray) => {
      if (itemDone.id === itemInArray.id) {
        itemInArray.done = !itemInArray.done;
      }
      return itemInArray;
    });
    setItems(updatedItems);
  }

  function onHideModal(event) {
    setShowModal(false);
  }

  return (
    <div className="container">
      <header>
        <h1>To-doing</h1>{" "}
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="addButton"
        >
          +
        </button>{" "}
      </header>
      <List
        onDoneItem={onDoneItem}
        onDeleteItem={onDeleteItem}
        items={items}
      ></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        {" "}
        <Form onAddItem={onAddItem}></Form>{" "}
      </Modal>
    </div>
  );
}

export default Todo;
