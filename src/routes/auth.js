import { createContext, useContext, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { users } from '../mocks/users'
import { blogData } from '../mocks/blogs'

// const adminList = ['Irisval', 'Retaxmaster', 'freddier']

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState(blogData)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const login = (userName) => {
    try {
      const isAdmin = users.find(admin => admin?.name === userName)
      if (isAdmin) {
        setUser({ isAdmin })
        navigate(from, { replace: true })
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

  const deletePost = (user, postAuthor) => {
    if (user === postAuthor) {
      auth.setBlogs(auth.blogs.filter((blog) => blog.author !== postAuthor))
    }
  }

  const auth = { user, login, logout, blogs, setBlogs, deletePost }
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
  const location = useLocation()
  if (!auth?.user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return props.children
}

export {
  AuthProvider,
  useAuth,
  AuthRouter
}
