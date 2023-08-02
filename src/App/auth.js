import { createContext, useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { users } from '../mocks/users'

// const adminList = ['Irisval', 'Retaxmaster', 'freddier']

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const login = (userName) => {
    try {
      const isAdmin = users.find(admin => admin?.name === userName)
      if (isAdmin) {
        setUser({ isAdmin })
        navigate('/profile')
      } else {
        throw new Error('Ha habido un error')
      }
    } catch (error) {
      console.log('usuarix no encontradx')
    }
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  const auth = { user, login, logout }
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth () {
  const auth = useContext(AuthContext)
  return auth
}

function AuthRouter (props) {
  const auth = useAuth()
  console.log(auth)
  if (!auth?.user) {
    return <Navigate to='/login' />
  }
  return props.children
}

export {
  AuthProvider,
  useAuth,
  AuthRouter
}
