import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    isSubmitted: false,
    isOpen: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setSubmitted: (state, action) => {
      state.isSubmitted = action.payload
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload
    }
  }
})