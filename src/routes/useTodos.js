import React from 'react'
import useLocalStorage from './useLocalStorage'

/**
 *
 */
function useTodos () {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronize
  } = useLocalStorage('TODOS_V2', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const [openModalEdit, setOpenModalEdit] = React.useState(false)

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].text = newText
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const id = newTodoID()
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text,
      id
    })
    saveTodos(newTodos)
  }

  const updateTodo = (text) => {
    const newTodos = [...todos]
    const todoItem = newTodos.find((item) => item.text === text)
    const index = newTodos.findIndex((item) => item.text === text)

    newTodos[index] = {
      ...todoItem,
      ...text
    }
    // return todos[index]

    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    return todos[todoIndex]
  }

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    updateTodo,
    openModal,
    setOpenModal,
    openModalEdit,
    setOpenModalEdit,
    sincronize,
    editTodo,
    getTodo
  }
}

function newTodoID () {
  const characteresNum = 10
  const words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const getAllCharacters = words.concat(numbers)
  let result = ''
  for (let index = 0; index < characteresNum; index++) {
    const randomIndex = Math.floor(Math.random() * getAllCharacters.length)
    result += getAllCharacters[randomIndex]
  }
  return result
}

export { useTodos }
