import React from "react";
import withStorageListener from "./withStorageListener";

function ChangeAlert({ sincronize }) {
   const { show, toggleShow } = withStorageListener(sincronize)
  if (show) {
    return (
      <div>
        <p>hubo cambios</p>
        <button
        onClick={()=> toggleShow(false)}
        >
            Cargar la info</button>
      </div>
    );
  } else {
    return null;
  }
}

export default ChangeAlert;
