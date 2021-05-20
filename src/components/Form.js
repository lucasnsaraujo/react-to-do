import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState();

  function handleChange(event) {
    let textFieldContent = event.target.value;
    setText(textFieldContent);
  }
  function addItem(event) {
    event.preventDefault(); // previne que o form seja enviado
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }
  return (
    <form>
      <input onChange={handleChange} type="text" value={text} />
      <button onClick={addItem} className="add-btn">
        Add
      </button>
    </form>
  );
}

export default Form;
