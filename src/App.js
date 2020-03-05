import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from 'components/PrivateRoute'
import { GlobalStyle } from 'lib/GlobalStyle'
import { ui } from './reducers/ui'
import { guests } from './reducers/guests'
import { users } from './reducers/users'
import { todos } from './reducers/todos'
import { AdminPage } from './pages/AdminPage'
import { TodoPage } from './pages/TodoPage'
import { GuestPage } from './pages/GuestPage'
import { StartPage } from './pages/StartPage'
import { RsvpPage } from './pages/RsvpPage'
import { MusicPage } from './pages/MusicPage'
import { LocationPage } from './pages/LocationPage'
import { LoginForm } from 'components/LoginForm'
import { Footer } from 'components/Footer'

// COMBINING REDUCERS
const reducer = combineReducers({
  ui: ui.reducer,
  guests: guests.reducer,
  users: users.reducer,
  todos: todos.reducer
})

// THE STORE
export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <LoginForm />
      <BrowserRouter>
        <Switch>

          <Route path='/' exact>
            <StartPage />
          </Route>

          <Route path='/rsvp'>
            <RsvpPage />
          </Route>

          <Route path='/music'>
            <MusicPage />
          </Route>

          <Route path='/location'>
            <LocationPage />
          </Route>

          <PrivateRoute component={AdminPage} path='/admin' exact />

          <PrivateRoute component={GuestPage} path='/guests' exact />

          <PrivateRoute component={TodoPage} path='/todos' exact />

        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
