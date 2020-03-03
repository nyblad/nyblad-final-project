// REDUCERS FOR GUEST INFORMATION
import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialState: {
    guests: [],
    guest: {},
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
    // updateGuest: (state, action) => {
    //   // To find the guest we want to update (guest = action.payload)
    //   const foundGuest = state.guests.find(guest => guest._id === action.payload)
    //   console.log(action.payload)
    //   // How to update all data on guest and see the updated data without refresh page
    //   if (foundGuest) {
    //     //
    //   }
    // },
    deleteGuest: (state, action) => {
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

// Thunk middleware for post
// guest = the formvalues I'm sending with dispatch on form submit
export const sendGuests = (guest) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests`, {
      method: "POST", body: JSON.stringify(guest), headers: { "Content-Type": "application/json" }
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
export const updateGuests = (formValues, guestId) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests/${guestId}`, {
      method: "PUT",
      body: JSON.stringify(formValues),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        // dispatch(guests.actions.updateGuest(guestId))
        console.log(guestId)
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// THUK MIDDLEWARE FOR DELETING SPECIFIC GUEST
export const deleteGuests = (guest) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests/${guest._id}`, { method: "DELETE" })
      .then(() => {
        dispatch(guests.actions.deleteGuest(guest._id))
        dispatch(ui.actions.setLoading(false))
      })
  }
}