import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 *
 * @param root0
 * @param root0.children
 */
function Modal ({ children }) {
  return ReactDOM.createPortal(
    <div className='ModalBackground'>{children}</div>,
    document.getElementById('modal')
  )
}

export { Modal }
