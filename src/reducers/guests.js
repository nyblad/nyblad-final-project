import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialState: {
    guests: [],
  },
  // The actions of the reducer
  reducers: {
    setGuests: (state, action) => {
      state.guests = action.payload
    },
    addGuest: (state, action) => {
      state.guests.push({ guest: action.payload })
      console.log('Action payload: ', action.payload)
    }

    // deleteGuest
    // updateGuest
  }
})

// Thunk middleware for get
export const fetchGuests = (path) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-guest-list.herokuapp.com${path}`)
      .then(res => res.json())
      .then(json => {
        dispatch(guests.actions.setGuests(json.guests))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for post
export const sendGuests = (guest) => {
  return dispatch => {
    fetch(`https://nyblad-guest-list.herokuapp.com/guests`, {
      method: "POST", body: JSON.stringify(guest), headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        dispatch(guests.actions.addGuest(guest))
        console.log('Dispatched: ', guest)
      })
  }
}