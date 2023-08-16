import React from 'react'
import './TodoSearch.css'

/**
 *
 * @param root0
 * @param root0.searchValue
 * @param root0.setSearchValue
 * @param root0.loading
 */
function TodoSearch ({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <input
      className='TodoSearch'
      placeholder='Cebolla'
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  )
}

export { TodoSearch }
