import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
/* import BlogPage from '../pages/Blog/BlogPage'
import ProfilePage from '../pages/User/ProfilePage'
import PostPage from '../pages/Blog/PostPage'
import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import { AuthRouter } from './auth' */
import NewTodoRoute from './home/todos/new-todo'
import EditTodoPage from './home/todos/edit-todo'

function App () {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/new-todo'>
          <NewTodoRoute />
        </Route>
        <Route path='/edit-todo/:id'>
          <EditTodoPage />
        </Route>
        {/*  <Route
          exact
          path='/blog'
        >
          <AuthRouter>
            <BlogPage />
          </AuthRouter>
        </Route> */}
        {/* <Route
          path='/blog/:slug'
        >
          <AuthRouter>
            <PostPage />
          </AuthRouter>
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/logout'>
          <LogoutPage />
        </Route>
        <Route
          path='/profile' element={
            <AuthRouter>
              <ProfilePage />
            </AuthRouter>
              }
        /> */}
        <Route path='*'>
          <p>No encontrado:(</p>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
