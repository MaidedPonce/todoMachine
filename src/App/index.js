import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import ProfilePage from './ProfilePage'
import PostPage from './PostPage'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import { AuthProvider, AuthRouter } from './auth'
// import { Menu } from './Menu'

function App () {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/blog' element={
                <AuthRouter>
                  <BlogPage />
                </AuthRouter>
              }
            >
              <Route
                path='/blog/:slug' element={
                  <AuthRouter>
                    <PostPage />
                  </AuthRouter>
              }
              />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route
              path='/profile' element={
                <AuthRouter>
                  <ProfilePage />
                </AuthRouter>
            }
            />
            <Route path='*' element={<p>No encontrado:(</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
