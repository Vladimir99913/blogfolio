import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchActivate, fetchCreate, fetchAuth, requestRefreshToken } from '../services/auth'
import { getJwtToken } from '../utils/getJwtToken'
import { setAccessTokenClient } from '../utils/client'

export const fetchCreateUser = createAsyncThunk(
  'auth/fetchCreateUser',
  async (user, {rejectWithValue}) => {
    try{
      const data = await fetchCreate(user)
      if(!data){
        throw new Error('Error')
      }
      return data
    } catch(error){
        return rejectWithValue(error.message)
    }
  }
)

export const fetchActivateUser = createAsyncThunk(
  'activation/fetchActivateUser',
  async (tokenActivate) => {
     await fetchActivate(tokenActivate)
  }
)

export const fetchAuthThunk = createAsyncThunk(
  'auth/fetchAuthThunk',
  async (user, {rejectWithValue}) => {
    try{
      const data = await fetchAuth(user)
      if(!data){
        throw new Error('Error')
      }
      console.log(data)
      return data
    } catch(error){
        return rejectWithValue(error.message)
    }
  }
)

export const fetchRefreshToken = createAsyncThunk(
  'auth/fetchRefreshToken',
  async (_, {getState}) => {
    const refreshToken = getState().auth.token?.refresh

    if(!refreshToken) return null

    const responce = await requestRefreshToken({refresh: refreshToken})
    const newToken = {
      refresh: refreshToken,
      ...responce
    }
    localStorage.setItem('token', JSON.stringify(newToken))
    return newToken
  }
)

const initialState = {
  currentUser:  null,
  isActivate: true,
  error: null,
  token: getJwtToken(),
}

setAccessTokenClient(initialState.token?.access)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogout: (state) => {
      state.token = null
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCreateUser.fulfilled, (state, action) => {
      state.currentUser = action.payload
    })
    .addCase(fetchCreateUser.rejected, (state, action) => {
      state.error = action.payload
    })
    .addCase(fetchActivateUser.fulfilled, (state) => {
      state.isActivate = true
    })
    .addCase(fetchActivateUser.rejected, (state, action) => {
      state.error = action.error.message
    })
    .addCase(fetchAuthThunk.fulfilled, (state, action) => {
      state.token = action.payload
      localStorage.setItem('token', JSON.stringify(action.payload))
      setAccessTokenClient(action.payload?.access)
    })
    .addCase(fetchAuthThunk.rejected, (state, action) => {
      state.error = action.payload
    })
    .addCase(fetchRefreshToken.fulfilled, (state, action) => {
      state.token = action.payload
      setAccessTokenClient(action.payload?.access)
    })
  },
})

export const {setLogout} = authSlice.actions
export const authReducer = authSlice.reducer
