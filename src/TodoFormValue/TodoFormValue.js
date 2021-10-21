import React from "react";
import { TodoContext } from "../TodoContext";
import "../TodoForm/index.css";

function TodoFormValue(props) {

    const [newValue, setNewValue] = React.useState("");
    const { updateTodo, setOpenModalEdit } = React.useContext(TodoContext);

    const onChangeTodo = (event) => {
      setNewValue(event.target.value)
    }

    const cancelEdit = () => {
        setOpenModalEdit(false)
    }

    const editTodoValue = (event) => { 
        event.preventDefault();
        updateTodo(newValue);
        setOpenModalEdit(false);
    }
    console.log(props.text)

  return (
    <form onSubmit={editTodoValue}>
      <label>Edita tu Todo</label>
      <textarea value={newValue} onChange={onChangeTodo} />
      <div>
        <button type="button" onClick={cancelEdit}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoFormValue };
