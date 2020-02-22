// Reducer to handle users and login in to admin pages
// Set a user for myself and a demo user for others
import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice({
  name: 'users',
  initialState: {
    user: 0,
    accessToken: '',
  },
  // The actions of the reducer
  reducers: {
    setUser: (state, action) => {
      // To set the logged in user
      state.user = action.payload
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
    dispatch(users.actions.setAccessToken(''))
    fetch('https://nyblad-guest-list.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify(loginValues),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        dispatch(users.actions.setUser(json.userId))
        dispatch(users.actions.setAccessToken(json.accessToken))
        console.log('Logged in:', json.name)
        console.log('AccesToken:', json.accessToken)
      })
      .catch(err => console.log('error', err))
  }
}