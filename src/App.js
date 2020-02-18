import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider as AlertProvider } from 'react-alert'
import { AlertTemplate } from 'lib/AlertTemplate'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { ui } from './reducers/ui'
import { guests } from './reducers/guests'
import { RsvpPage } from './pages/RsvpPage'
import { GuestPage } from './pages/GuestPage'
import { StartPage } from './pages/StartPage'
import { MusicPage } from './pages/MusicPage'
import { LocationPage } from './pages/LocationPage'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #333;
    background: #f1f1f1;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
  }
  a {
    text-decoration: none;
  }
`
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
      <AlertProvider template={AlertTemplate}>
        <GlobalStyle />
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
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  )
}
