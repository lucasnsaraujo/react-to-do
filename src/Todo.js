import React, { useState } from "react";
import "./Todo.css";
import List from "./components/List";
import Form from "./components/Form";
import Modal from "./components/Modal";
import { createStore } from "redux";
import { Provider } from "react-redux";
import listReducer from "./reducers/listReducer";

function loadState() {
  const actualState = localStorage.getItem("saved_items");
  if (actualState) {
    return JSON.parse(actualState);
  } else {
    return [];
  }
}
function persistState(state) {
  localStorage.setItem("saved_items", JSON.stringify(state));
}
const store = createStore(listReducer, loadState());
store.subscribe(() => {
  persistState(store.getState());
});

function Todo() {
  const [showModal, setShowModal] = useState(false);

  function onHideModal(event) {
    setShowModal(false);
  }

  return (
    <div className="container">
      <Provider store={store}>
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
        <List></List>
        <Modal show={showModal} onHideModal={onHideModal}>
          {" "}
          <Form></Form>{" "}
        </Modal>
      </Provider>
    </div>
  );
}

export default Todo;
