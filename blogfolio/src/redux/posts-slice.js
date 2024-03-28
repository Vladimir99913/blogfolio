import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPosts, fetchPostById, requestCreatePost } from '../services/posts'

export const fetchData = createAsyncThunk(
  'posts/fetchData',
  async (opts = {}, {getState}) => {
    const {search, pageNumber = 1, ordering= null} = opts
    const {limit} = getState().posts
    const offset = (pageNumber-1) * limit
    return await fetchPosts({search, limit, offset, ordering})
  }
)

export const fetchDataById = createAsyncThunk(
  'posts/fetchDataById',
  async (id) => {
    const data = await fetchPostById(id)
    return data
  }
)

export const fetchCreatePost = createAsyncThunk('posts/fetchCreatePost', async (formData) => {
  return await requestCreatePost(formData)
})

const initialState = {
  data: [],
  dataById: {},
  isLoading: false,
  error: null,
  limit:24,
  pagesCounter:0,
  newPost: null
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLike: (state, action) => {
       state.data.map(item => {
        if(item.id == action.payload){
           item.like += 1
        }
      })
    },
    setDislike: (state, action) => {
      state.data.map(item => {
       if(item.id == action.payload){
          item.dislike += 1
       }
     })
   },
   setFavorite: (state, action) => {
    state.data.map(item => {
     if(item.id == action.payload){
       item.isFavorite = !item.isFavorite
     }
   })
 },
 setNewPost: (state) => {
  state.newPost = null
},
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload.results
        state.isLoading = false

        if(state.pagesCounter) return

        state.pagesCounter = Math.ceil(action.payload.count / state.limit)
      })

      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
      .addCase(fetchDataById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchDataById.fulfilled, (state, action) => {
        state.dataById = action.payload
        state.isLoading = false
      })
      .addCase(fetchDataById.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })

      .addCase(fetchCreatePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCreatePost.fulfilled, (state, action) => {
        state.newPost = action.payload
        state.isLoading = false
      })
      .addCase(fetchCreatePost.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
  }
})

export const { setLike, setDislike, setFavorite, setNewPost } = postsSlice.actions
export const postsReducer = postsSlice.reducer

