// Reducers to handle users and login in to admin pages
import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const users = createSlice({
  name: 'users',
  initialState: {
    accessToken: localStorage.getItem('accessToken'),
    userName: localStorage.getItem('userName')
  },
  // The actions of the reducer
  reducers: {
    setUserName: (state, action) => {
      localStorage.setItem('userName', action.payload)
      state.userName = action.payload
    },
    removeUserName: (state, action) => {
      state.userName = localStorage.removeItem('userName', action.payload)
    },
    setAccessToken: (state, action) => {
      localStorage.setItem('accessToken', action.payload)
      state.accessToken = action.payload
    },
    removeAccessToken: (state, action) => {
      state.accessToken = localStorage.removeItem('accessToken', action.payload)
    }
  }
})

// Thunk for login: 
export const fetchUser = (loginValues) => {
  return dispatch => {
    // dispatch(users.actions.setAccessToken(''))
    fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify(loginValues),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())

      .then(json => {
        console.log(json)
        if (json.notFound !== true) {
          dispatch(users.actions.setAccessToken(json.accessToken))
          dispatch(users.actions.setUserName(json.name))
          dispatch(ui.actions.setLoginFailed(false))
          dispatch(ui.actions.setLoginOpen(false))
        } else {
          dispatch(ui.actions.setLoginFailed(true))
        }
      })
      .catch(err => console.log('error', err))
  }
}