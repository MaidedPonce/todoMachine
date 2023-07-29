import React from 'react'

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.loading
 */
function Header ({ children, loading }) {
  /*   return (<header>{React.cloneElement(children, { loading })} </header>);
   */
  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}{' '}
    </header>
  )
}

export default Header
