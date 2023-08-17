import { useTodos } from '../../../useTodos'
import { TodoForm } from '../../../../ui/TodoForm'
import React from 'react'

const index = () => {
  const { addTodo, loading } = useTodos()
  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      submitText='Añadir'
      loading={loading}
      submitEvent={(text) => addTodo(text)}
    />
  )
}

export default index
