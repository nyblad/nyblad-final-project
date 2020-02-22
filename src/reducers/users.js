// Reducer to handle users and login in to admin pages
// Set a user for myself and a demo user for others
import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const users = createSlice({
  name: 'users',
  initialState: {
    userId: 0,
    userName: '',
    accessToken: '',
  },
  // The actions of the reducer
  reducers: {
    setUserId: (state, action) => {
      // To set the logged in user
      state.userId = action.payload
    },
    setUserName: (state, action) => {
      // To set the logged in user
      state.userName = action.payload
    },
    setAccessToken: (state, action) => {
      // To set accesstoken for logged in user
      state.accessToken = action.payload
    }
  }
})

// Thunk for login: 
export const fetchUser = (loginValues) => {
  return dispatch => {
    // dispatch(users.actions.setAccessToken(''))
    localStorage.removeItem('accessToken')
    fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify(loginValues),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())

      .then(json => {
        console.log(json)
        if (json.notFound !== true) {
          localStorage.setItem('accessToken', json.accessToken)
          dispatch(users.actions.setUserId(json.userId))
          dispatch(users.actions.setUserName(json.name))
          // dispatch(users.actions.setAccessToken(json.accessToken))
          dispatch(ui.actions.setLoginFailed(false))
          dispatch(ui.actions.setLoginOpen(false))
          console.log('Logged in:', json.name)
          console.log('AccesToken:', json.accessToken)
        } else {
          dispatch(ui.actions.setLoginFailed(true))
        }
      })
      .catch(err => console.log('error', err))
  }
}