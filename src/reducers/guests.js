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
    },
    addGuest: (state, action) => {
      // state.guests.push({  })
    }

    // deleteGuest
    // updateGuest
  }
})

// Thunk middleware
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

// Just started setup:
// export const sendGuests = () => {
//   return dispatch => {
//     fetch(`https://nyblad-guest-list.herokuapp.com/guests`, {
//       method: "POST", body: JSON.stringify({ })
//     })
//       .then(() => {
//         dispatch(guests.actions.addGuest())
//       })
//   }
// }