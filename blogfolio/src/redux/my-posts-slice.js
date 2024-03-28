import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMyPosts } from '../services/posts'

export const fetchMyData = createAsyncThunk(
  'posts/fetchMyData',
  async (opts = {}, {getState}) => {
    const {pageNumber = 1} = opts
    const {limit} = getState().myPosts
    const offset = (pageNumber-1) * limit
    return await fetchMyPosts({limit, offset})
  }
)

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  limit:9,
  pagesCounter:0,
}

export const myPostsSlice = createSlice({
  name: 'myPosts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMyData.fulfilled, (state, action) => {
        state.data = action.payload.results
        state.isLoading = false

        if(state.pagesCounter) return

        state.pagesCounter = Math.ceil(action.payload.count / state.limit)
      })
      .addCase(fetchMyData.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
  }
})

export const { setMyLike, setMyDislike, setMyFavorite } = myPostsSlice.actions
export const myPostsReducer = myPostsSlice.reducer

