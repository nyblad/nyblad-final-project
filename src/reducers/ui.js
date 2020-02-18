import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    isLoginOpen: false,
    isConfirmOpen: false,
    isRsvpConfirmOpen: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setLoginOpen: (state, action) => {
      state.isLoginOpen = action.payload
    },
    setConfirmOpen: (state, action) => {
      state.isConfirmOpen = action.payload
    },
    setRsvpConfirmOpen: (state, action) => {
      state.isRsvpConfirmOpen = action.payload
    }
  }
})