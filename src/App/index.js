import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import ProfilePage from './ProfilePage'
import PostPage from './PostPage'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import { AuthProvider } from './auth'
import { Menu } from './Menu'

function App () {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />}>
              <Route path='/blog/:slug' element={<PostPage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<p>No encontrado:(</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
