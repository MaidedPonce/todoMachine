import React from "react";
import ReactDOM  from "react-dom";
import "../Modal/index.css";

function ModalEdit({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modalEdit")
  );
}

export { ModalEdit };
