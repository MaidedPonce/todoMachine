import React from "react";
import "./index.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("")

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="lbl">Escribe tu nuevo TODO</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Amar a Andy Biersack <3" />

      <div className="containerButton">
        <button className="TodoForm-button-cancel" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="TodoForm-button-add" type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
