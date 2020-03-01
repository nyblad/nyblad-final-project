import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialState: {
    guests: [],
    guest: {},
  },
  // The actions of the reducer
  reducers: {
    setGuest: (state, action) => {
      // To set a single guest
      state.guest = action.payload
    },
    setGuests: (state, action) => {
      // To set all guests
      state.guests = action.payload
    },
    addGuest: (state, action) => {
      // Takes all form values and pushing them into array or guests
      state.guests.push(action.payload)
    },
    updateGuest: (state, action) => {
      // To find the guest we want to update
      const foundGuest = state.guests.find(guest => guest._id === action.payload)
      // To change isAttending status on guest - How to update all data instead?
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
      .then(() => {
        // Dispatching the form values to the action to add guest
        dispatch(guests.actions.addGuest(guest))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for updating a guest
// export const updateGuests = (guest) => {
//   return dispatch => {
//     dispatch(ui.actions.setLoading(true))
//     fetch(`https://nyblad-final-project-api.herokuapp.com/guests/${guest._id}`, { 
//       method: "PUT",
//     })
//       .then(() => {
//         dispatch(guests.actions.updateGuest(guest._id))
//         dispatch(ui.actions.setLoading(false))
//       })
//   }
// }

// How to PUT the formValues from ConfirmEditGuest? 
// Need both formValues and guestId?
export const updateGuests = (guest, formValues) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/guests/${guest._id}`, {
      method: "PUT",
      body: JSON.stringify(formValues),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        dispatch(guests.actions.updateGuest(guest._id))
        dispatch(ui.actions.setLoading(false))
        console.log(guest._id)
      })
  }
}

// Thunk middleware for deleting a guest
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