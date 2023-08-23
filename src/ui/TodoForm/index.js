import React from 'react'
import './index.css'
import { useHistory } from 'react-router-dom'

/**
 *
 * @param root0
 * @param root0.addTodo
 * @param root0.setOpenModal
 */
function TodoForm (props) {
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '')
  const navigate = useHistory()
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    // setOpenModal(false)
    navigate.push('/')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    navigate.push('/')
    props.submitEvent(newTodoValue)
    // setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label className='lbl'>{props.label}</label>
      <textarea disabled={props.loading} value={newTodoValue} onChange={onChange} placeholder='Amar a Andy Biersack <3' />

      <div className='containerButton'>
        <button className='TodoForm-button-cancel' type='button' onClick={onCancel}>
          Cancelar
        </button>
        <button className='TodoForm-button-add' type='submit'>{props.submitText}</button>
      </div>
    </form>
  )
}

export { TodoForm }
