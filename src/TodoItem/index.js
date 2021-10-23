import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  /* const onClickButton = () => {
    // props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);
    setOpenModalEdit((prevState) => !prevState);
  };
 */
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.onComplete && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        √ 
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span>

     {/*  <button 
      onClick={() => onClickButton(text)}
      > 
        Editar
      </button> */}
    </li>
  );
}

export { TodoItem };