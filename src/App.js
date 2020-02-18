import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider as AlertProvider } from 'react-alert'
import { AlertInfo } from 'lib/AlertInfo'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'lib/GlobalStyle'
import { ui } from './reducers/ui'
import { guests } from './reducers/guests'
import { RsvpPage } from './pages/RsvpPage'
import { GuestPage } from './pages/GuestPage'
import { StartPage } from './pages/StartPage'
import { MusicPage } from './pages/MusicPage'
import { LocationPage } from './pages/LocationPage'
import { LoginForm } from 'components/LoginForm'
import { Confirm } from 'components/Confirm'

// COMBINING REDUCERS
const reducer = combineReducers({
  ui: ui.reducer,
  guests: guests.reducer
})

// THE STORE
export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertInfo}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <StartPage />
              <LoginForm />
            </Route>

            <Route path="/rsvp">
              <RsvpPage />
            </Route>

            <Route path="/guests">
              <GuestPage />
              <Confirm />
            </Route>

            <Route path="/music">
              <MusicPage />
            </Route>

            <Route path="/location">
              <LocationPage />
            </Route>

          </Switch>
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  )
}
