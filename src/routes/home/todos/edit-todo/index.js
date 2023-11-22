import { useTodos } from '../../../../routes/useTodos'
import { TodoForm } from '../../../../ui/TodoForm'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const EditTodoPage = () => {
  const { editTodo, getTodo, loading } = useTodos()
  const params = useParams()
  const id = params.id

  const location = useLocation()
  console.log(location)
  let todoText
  /* if (location.state?.todo) {
    todoText = location.state.todo.text
  } else  */
  if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id)
    todoText = todo.text
  }
  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      defaultTodoText={todoText}
      submitText='Añadir'
      loading={loading}
      submitEvent={(newText) => { editTodo(id, newText) }}
    />
  )
}

export default EditTodoPage
