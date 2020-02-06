import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components'
import { ui } from './reducers/ui'
import { guests } from './reducers/guests'
// import { RsvpForm } from './components/rsvpForm'
import { GuestList } from './components/GuestList'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    color: #333;
    background: #f1f1f1;
    padding: 15px;
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
      <h1>Wedding 2022</h1>
      <GuestList />
    </Provider>
  )
}
