import React, { useState } from 'react'
import { useAuth } from './auth'

const LoginPage = () => {
  const [username, setUserName] = useState('')
  const auth = useAuth()
  const login = (e) => {
    e.preventDefault()
    auth.login(username)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario</label>
        <input
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default LoginPage
