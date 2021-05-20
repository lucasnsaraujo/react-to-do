import React, { useState } from "react";
import Card from "./Card";

export default function Modal(props) {
  const [show, setShow] = useState(false);

  function hideModal(event) {
    if (event.target.id === "modal") {
      props.onHideModal();
    }
  }

  return (
    <div
      id="modal"
      onClick={hideModal}
      className={props.show ? "modal" : "modal hide"}
    >
      <Card className="cardModal">{props.children}</Card>
    </div>
  );
}
