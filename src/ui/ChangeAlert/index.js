import React from 'react'
import withStorageListener from './withStorageListener'

/**
 *
 * @param root0
 * @param root0.sincronize
 */
function ChangeAlert ({ sincronize }) {
  const { show, toggleShow } = withStorageListener(sincronize)
  if (show) {
    return (
      <div>
        <p>hubo cambios</p>
        <button onClick={() => toggleShow(false)}>Cargar la info</button>
      </div>
    )
  } else {
    return null
  }
}

export default ChangeAlert
