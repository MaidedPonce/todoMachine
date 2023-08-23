/* eslint-disable  */
import React, { useEffect, useMemo, useState } from 'react'
import './TodoSearch.css'
import { useHistory, useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

/**
 *
 * @param root0
 * @param root0.searchValue
 * @param root0.setSearchValue
 * @param root0.loading
 */
function TodoSearch({ searchValue, setSearchValue, loading }) {
  const history = useHistory()
  const { searchParams } = useLocation()
  const search = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams, searchValue]
  )
  const onSearchValueChange = event => {
    search.set('search', event.target.value)
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    if (!search.get('search')) {
      search.set('search', searchValue)
      history.replace({ search: search.toString() })
    }
  }, [searchValue])

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
