import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoItem.css';

function TodoItem(props) {

  const { setOpenModalEdit, completedTodos, deleteTodo } = React.useContext(TodoContext)
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
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={deleteTodo}
      >
        X
      </span>

      <button 
      onClick={() => onClickButton(props.text)}
      > 
        Editar
      </button>
    </li>
  );
}

export { TodoItem };