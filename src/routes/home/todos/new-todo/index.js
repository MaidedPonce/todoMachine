import { TodoForm } from '@ui/TodoForm'
import React from 'react'

const index = () => {
  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      submitText='Añadir'
      submitEvent={() => { console.log('Llamar a todo') }}
    />
  )
}

export default index
