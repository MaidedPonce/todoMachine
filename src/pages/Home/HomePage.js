/* eslint-disable  */
import React from 'react'
import { useTodos } from '../../routes/useTodos'
import { TodoCounter } from '../../ui/TodoCounter/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch/TodoSearch'
import { TodoList } from '../../ui/TodoList/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { CreateTodoButton } from '../../ui/CreateTodoButton'
import TodoLoading from '../../ui/TodoLoading'
import Header from '../../ui/TodoHeader/Header'
import { TodoError } from '../../ui/TodoError/todoError'
import { EmptyTodos } from '../../ui/EmptyTodos/emptyTodos'
import ChangeAlert from '../../ui/ChangeAlert'
import { useHistory } from 'react-router-dom'
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function HomePage () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    // openModal,
    // setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    sincronize
  } = useTodos()
  const navigate = useHistory()
  return (
    <>
      <Header>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        /* onEmptySearchResult={(searchText) => <p>No hay resultado para {searchText}</p>} */
      >

        {/* render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      /> */}
        {/* {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => {
              navigate.push(
                '/edit-todo/' + todo.id,
                {
                  state: { todo }
                }
              )
            }}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )} */}holi
      </TodoList>
      {/* <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <TodoLoading />}
        {!loading && !searchedTodos.length && <p>No hay todos...</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onCompleted={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          completedTodos={completedTodos}
          deleteTodo={deleteTodo}
        />
        ))}
      </TodoList> */}

      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}
      <CreateTodoButton onClick={() => navigate('/new-todo')} />
      {/*       {!!openModalEdit && (
        <ModalEdit>
          <TodoFormValue />
        </ModalEdit>
      )} */}

      <ChangeAlert sincronize={sincronize} />
    </>
  )
}

export default HomePage
