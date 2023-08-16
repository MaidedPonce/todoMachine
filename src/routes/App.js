import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import BlogPage from '../pages/Blog/BlogPage'
import ProfilePage from '../pages/User/ProfilePage'
import PostPage from '../pages/Blog/PostPage'
import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import { AuthProvider, AuthRouter } from './auth'
import NewTodoRoute from './home/todos/new-todo'
import EditTodoPage from './home/todos/edit-todo'

function App () {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/new-todo' element={<NewTodoRoute />} />
            <Route path='/edit-todo/:id' element={<EditTodoPage />} />
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
