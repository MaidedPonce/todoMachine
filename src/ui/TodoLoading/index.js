import React from 'react'
import './index.css'

const TodoLoading = ({ totalTodos }) => {
  console.log(totalTodos)
  return (
    <section className='skeleton-container'>

      <div className='loading-skeleton' />
      <div className='loading-skeleton' />
      <div className='loading-skeleton' />
    </section>
  )
}

export default TodoLoading
