import React, { useState } from "react";
import { addItem } from "../actions/listAction";
import { useDispatch } from "react-redux";

function Form(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState();

  function handleChange(event) {
    let textFieldContent = event.target.value;
    setText(textFieldContent);
  }
  function addItemEvent(event) {
    event.preventDefault(); // previne que o form seja enviado
    if (text) {
      dispatch(addItem(text));
    }
  }
  return (
    <form>
      <input onChange={handleChange} type="text" value={text} />
      <button onClick={addItemEvent} className="add-btn">
        Add
      </button>
    </form>
  );
}

export default Form;
