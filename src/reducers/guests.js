import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialState: {
    guests: []
  },
  // The actions of guest reducer
  reducers: {
    setGuests: (state, action) => {
      state.guests = action.payload
    }
  }
})

// Thunk middleware to fetch the guest list
export const fetchGuests = (path) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-guest-list.herokuapp.com${path}`)
      .then(res => res.json())
      .then(json => {
        dispatch(guests.actions.setGuests(json.guestList))
        dispatch(ui.actions.setLoading(false))
      })
  }
}