import { useTodos } from '../../../useTodos'
import { TodoForm } from '../../../../ui/TodoForm'
import React from 'react'

const index = () => {
  const { addTodo } = useTodos()
  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      submitText='Añadir'
      submitEvent={(text) => addTodo(text)}
    />
  )
}

export default index
