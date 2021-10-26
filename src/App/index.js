import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import TodoLoading from "../TodoLoading";
import Header from "../TodoHeader/Header";
import { TodoError } from "../TodoError/todoError";
import { EmptyTodos } from "../EmptyTodos/emptyTodos";
import ChangeAlert from "../ChangeAlert";
import ChangeAlertWithStorageListener from "../ChangeAlert";
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
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronize
  } = useTodos();

  return (
    <React.Fragment>
      <Header >
        <TodoCounter 
        totalTodos={totalTodos} 
        completedTodos={completedTodos} 
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        /* loading={loading} */
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
        onEmptySearchResult={(searchText) => <p>No hay resultado para {searchText}</p>}>
        
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
      {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )
      }
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

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      {/*       {!!openModalEdit && (
        <ModalEdit>
          <TodoFormValue />
        </ModalEdit>
      )} */}

      <ChangeAlertWithStorageListener sincronize={sincronize}/>
    </React.Fragment>
  );
}

export default App;
