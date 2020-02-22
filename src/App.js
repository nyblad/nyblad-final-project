import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'lib/GlobalStyle'
import { ui } from './reducers/ui'
import { guests } from './reducers/guests'
import { users } from './reducers/users'
import { RsvpPage } from './pages/RsvpPage'
import { GuestPage } from './pages/GuestPage'
import { StartPage } from './pages/StartPage'
import { MusicPage } from './pages/MusicPage'
import { LocationPage } from './pages/LocationPage'
import { LoginForm } from 'components/LoginForm'
import { Footer } from 'components/Footer'

// COMBINING REDUCERS
const reducer = combineReducers({
  ui: ui.reducer,
  guests: guests.reducer,
  users: users.reducer
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

          <Route path="/" exact>
            <StartPage />
          </Route>

          <Route path="/rsvp">
            <RsvpPage />
          </Route>

          <Route path="/guests">
            <GuestPage />
          </Route>

          <Route path="/music">
            <MusicPage />
          </Route>

          <Route path="/location">
            <LocationPage />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
