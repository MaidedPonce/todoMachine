import React, { useEffect } from 'react'
import './TodoSearch.css'
import { useSearchParams } from 'react-router-dom'

/**
 *
 * @param root0
 * @param root0.searchValue
 * @param root0.setSearchValue
 * @param root0.loading
 */
function TodoSearch ({ searchValue, setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const onSearchValueChange = (event) => {
    const searchParams = {
      search: event.target.value
    }
    setSearchValue(searchParams)
    setSearchParams(searchParams)
  }
  useEffect(() => {
    const search = searchParams.get('search') ?? ''
    setSearchValue(search)
  }, [searchParams])

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
