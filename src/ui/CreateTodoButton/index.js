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
      <img src='https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-sunflower-flowers-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png' />
    </button>
  )
}

export { CreateTodoButton }
