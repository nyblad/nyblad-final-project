// REDUCERS FOR GUEST INFORMATION
import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialState: {
    guests: [],
    guest: ''
  },
  reducers: {
    setGuest: (state, action) => {
      // To set a single guest object (all data about the guest)
      state.guest = action.payload
    },
    setGuests: (state, action) => {
      // To set guest list
      state.guests = action.payload
    },
    addGuest: (state, action) => {
      // Takes all form values from rsvp and adds to array of guests
      state.guests.push(action.payload)
    },
    updateGuest: (state, action) => {
      // To find the guest we want to update (guest = action.payload)
      // If guest found, return the guests updated data
      state.guests = state.guests.map((guest) => {
        if (guest._id === action.payload._id) {
          return action.payload
        }
        // Otherwhise return guest as is
        return guest
      })
    },
    deleteGuest: (state, action) => {
      // Filter out all guests but the guest with matching id
      state.guests = state.guests.filter(guest => guest._id !== action.payload)
    }
  }
})

// THUNK MIDDLEWARE FOR GUESTLIST
export const fetchGuests = (path) => {
  return dispatch => {
    const accessToken = localStorage.getItem('accessToken')
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(guests.actions.setGuests(json.guests))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// THUNK MIDDLEWARE FOR ADD GUESTS
// guest = the formvalues from dispatch on form submit
export const sendGuests = (guest) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests`, {
      method: 'POST',
      body: JSON.stringify(guest),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then((json) => {
        // Dispatching the form values to the action to add guest
        dispatch(guests.actions.addGuest(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// THUNK MIDDLEWARE FOR UPDATE SPECIFIC GUEST
export const updateGuests = (formValues, guest) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests/${guest._id}`, {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((guest) => {
        dispatch(guests.actions.updateGuest(guest))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// THUNK MIDDLEWARE FOR DELETING SPECIFIC GUEST
export const deleteGuests = (guest) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests/${guest._id}`, {
      method: 'DELETE'
    })
      .then(() => {
        dispatch(guests.actions.deleteGuest(guest._id))
        dispatch(ui.actions.setLoading(false))
      })
  }
}