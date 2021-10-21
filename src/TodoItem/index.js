import React from 'react';
import './TodoItem.css';

function TodoItem({ setOpenModalEdit, completedTodos, deleteTodo, text }) {

  const onClickButton = () => {
    // props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);
    setOpenModalEdit((prevState) => !prevState);
  };

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completedTodos && 'Icon-check--active'}`}
      onClick={completedTodos}
      >
        √ 
      </span>
      <p className={`TodoItem-p ${completedTodos && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span className="Icon Icon-delete"
      onClick={deleteTodo}
      >
        X
      </span>

      <button 
      onClick={() => onClickButton(text)}
      > 
        Editar
      </button>
    </li>
  );
}

export { TodoItem };