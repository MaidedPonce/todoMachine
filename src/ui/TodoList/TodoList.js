import React from 'react'
import './TodoList.css'

/**
 *
 * @param props
 */
function TodoList (props) {
  const propSwi = props.children || props.render

  return (
    <section className='TodoList-container'>
      {props.loading && props.onLoading()}
      <section className='TodoListMax'>
        {props.error && props.onError()}
        {!props.loading && !props.totalTodos && props.onEmptyTodos()}

        {!!props.totalTodos &&
          !props.searchedTodos.length &&
          props.onEmptySearchResult(props.searchText)}
        {!props.loading && !props.error && props.searchedTodos.map(propSwi)}
        <ul>{props.children}</ul>
      </section>
    </section>
  )
}

export { TodoList }
