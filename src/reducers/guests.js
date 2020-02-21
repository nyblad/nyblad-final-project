import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialState: {
    guests: [],
    guest: [],
  },
  // The actions of the reducer
  reducers: {
    setGuest: (state, action) => {
      // To set a single guest with id
      state.guest = action.payload
    },
    setGuests: (state, action) => {
      // To set all guests
      state.guests = action.payload
    },
    addGuest: (state, action) => {
      // Takes all form values and pushing them into array or guests
      state.guests.push({ guest: action.payload })
    },
    updateGuest: (state, action) => {
      // To find the guest we want to update
      const foundGuest = state.guests.find(guest => guest._id === action.payload)
      // To change isAttending status on guest
      if (foundGuest) {
        foundGuest.isAttending = !foundGuest.isAttending
      }
    },
    deleteGuest: (state, action) => {
      state.guests = state.guests.filter(guest => guest._id !== action.payload)
    }
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
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-guest-list.herokuapp.com/guests`, {
      method: "POST", body: JSON.stringify(guest), headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        // Dispatching the form values to the action to add guest
        dispatch(guests.actions.addGuest(guest))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for updating a guest
export const updateGuests = (guestId) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-guest-list.herokuapp.com/guests/${guestId}`, { method: "PUT" })
      .then(() => {
        dispatch(guests.actions.updateGuest(guestId))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for deleting a guest
export const deleteGuests = (guestId) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-guest-list.herokuapp.com/guests/${guestId}`, { method: "DELETE" })
      .then(() => {
        dispatch(guests.actions.deleteGuest(guestId))
        dispatch(ui.actions.setLoading(false))
      })
  }
}