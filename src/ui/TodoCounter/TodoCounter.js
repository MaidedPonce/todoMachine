import React from 'react'
import './TodoCounter.css'

/**
 *
 * @param root0
 * @param root0.totalTodos
 * @param root0.completedTodos
 * @param root0.loading
 */
function TodoCounter ({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && '.TodoCounter--loading'}`}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}

export { TodoCounter }
