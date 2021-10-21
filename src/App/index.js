import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import TodoLoading from "../TodoLoading";
import Header from "../TodoHeader";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    openModalEdit,
    setOpenModalEdit,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo, 
  } = useTodos();

  return (
    <React.Fragment>
      {/* <section className="sectionSearch"> */}
      <Header>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>
     {/*  </section> */}
      <TodoList>
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
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
{/*       {!!openModalEdit && (
        <ModalEdit>
          <TodoFormValue />
        </ModalEdit>
      )} */}
    </React.Fragment>
  );
}

export default App;
