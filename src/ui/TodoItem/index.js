import React from 'react'
import './TodoItem.css'

/**
 *
 * @param props
 */
function TodoItem (props) {
  /* const onClickButton = () => {
    // props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);
    setOpenModalEdit((prevState) => !prevState);
  };
 */
  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${
          props.onComplete && 'Icon-check--active'
        }`}
        onClick={props.onComplete}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 40 40'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 13l4 4L19 7'
          />
        </svg>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className='Icon Icon-delete' onClick={props.onDelete}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 50 50'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </span>

      {/*  <button
      onClick={() => onClickButton(text)}
      >
        Editar
      </button> */}
    </li>
  )
}

export { TodoItem }
