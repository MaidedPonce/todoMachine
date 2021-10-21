import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import TodoLoading from "../TodoLoading";
import { TodoFormValue } from "../TodoFormValue/TodoFormValue";
import { ModalEdit } from "../ModalEdit/ModalEdit";
import Header from "../TodoHeader";

function AppUi() {
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
  } = React.useContext(TodoContext);

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
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      {!!openModalEdit && (
        <ModalEdit>
          <TodoFormValue />
        </ModalEdit>
      )}
    </React.Fragment>
  );
}

export { AppUi };
