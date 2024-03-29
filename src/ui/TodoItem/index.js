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
      {/* onEdit={props.InEdit} */}
      <button onClick={props.onEdit} className='Icon Icon-edit'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
        </svg>
      </button>
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
