import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCurrentUser } from '../services/auth'

export const CurrentUserThunk = createAsyncThunk(
  'currentUser/CurrentUserThunk',
  async (_, {getState}) => {
     const token = getState().auth.token
     if(!token) return null
     const data = await fetchCurrentUser(token)
     return data
  }
)

const initialState = {
  userData: null,
  shownModal: false,
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
     },
    showModal: (state) => {
      state.shownModal = true
    },
    hideModal: (state) => {
      state.shownModal = false
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(CurrentUserThunk.fulfilled, (state, action) => {
      state.userData = action.payload
      // localStorage.setItem('userData', JSON.stringify(action.payload))
    })
  },
})

export const { setUserData, showModal, hideModal } = currentUserSlice.actions
export const currentUserSliceReducer = currentUserSlice.reducer
