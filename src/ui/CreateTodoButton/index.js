import React from 'react'
import './CreateTodoButton.css'

/**
 *
 * @param root0
 * @param root0.setOpenModal
 */
function CreateTodoButton ({ onClick }) {
  return (
    <button className='CreateTodoButton' onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='#EFC24B' class='w-6 h-6'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
      </svg>
    </button>
  )
}

export { CreateTodoButton }
