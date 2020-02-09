import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { ui } from './reducers/ui'
import { guests } from './reducers/guests'
// import { RsvpForm } from './components/rsvpForm'
import { GuestList } from './pages/GuestList'
import { StartPage } from './pages/StartPage'


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
      <GlobalStyle />
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <StartPage />
          </Route>

          <Route path="/guests">
            <GuestList />
          </Route>

        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
