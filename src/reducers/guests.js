import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialState: {
    guests: []
  },
  // The actions of the reducer
  reducers: {
    setGuests: (state, action) => {
      state.guests = action.payload
    },
    addGuest: (state, action) => {
      // Takes all form values and pushing them into array or guests
      state.guests.push({ guest: action.payload })
    }

    // deleteGuest
    // updateGuest isAttending
  }
})

// Thunk middleware for get
export const fetchGuests = (path) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-guest-list.herokuapp.com/guests${path}`)
      .then(res => res.json())
      .then(json => {
        dispatch(guests.actions.setGuests(json.guests))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for post
// guest = the formvalues I'm sending with dispatch on form submit
export const sendGuests = (guest) => {
  return dispatch => {
    fetch(`https://nyblad-guest-list.herokuapp.com/guests`, {
      method: "POST", body: JSON.stringify(guest), headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        // Dispatching the form values to the action to add guest
        dispatch(guests.actions.addGuest(guest))
      })
  }
}