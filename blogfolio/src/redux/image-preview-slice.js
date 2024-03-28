import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url: '',
  shownModal: false
}

export const imagePreviewSlice = createSlice({
  name: 'imagePreview',
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.url = action.payload
    },
    showModal: (state) => {
      state.shownModal = true
    },
    hideModal: (state) => {
      state.shownModal = false
    }
  }
})

export const { setImage, showModal, hideModal } = imagePreviewSlice.actions
export const imagePreviewReducer = imagePreviewSlice.reducer
