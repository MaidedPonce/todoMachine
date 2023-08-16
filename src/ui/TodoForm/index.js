import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

/**
 *
 * @param root0
 * @param root0.addTodo
 * @param root0.setOpenModal
 */
function TodoForm (props) {
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '')
  const navigate = useNavigate()
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    // setOpenModal(false)
    navigate('/')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/')
    props.submitEvent(newTodoValue)
    // setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label className='lbl'>{props.label}</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder='Amar a Andy Biersack <3' />

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
