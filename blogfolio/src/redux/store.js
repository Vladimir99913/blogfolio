import { configureStore } from '@reduxjs/toolkit'
import { languageReducer } from './language-slice'
import { postsReducer } from './posts-slice'
import { imagePreviewReducer } from './image-preview-slice'
import { tabsReducer } from './tabs-slice'
import { authReducer, fetchRefreshToken } from './auth-slice'
import { currentUserSliceReducer } from './current-user-slice'
import { isTokenExpired } from '../utils/isTokenExpired'
import { myPostsReducer } from './my-posts-slice'


  let isRefreshing = false

  const tokenExpirationMiddleware = (store) => (next) => (action) => {
    const state = store.getState()
    const currentToken = state.auth.token?.access

    if(currentToken && !isRefreshing && isTokenExpired(currentToken)) {
      isRefreshing = true
      store.dispatch(fetchRefreshToken())
      .finally (()=> {isRefreshing = false})
    }

    return next(action)
  }

export const store = configureStore({
  reducer: {
    language: languageReducer,
    posts: postsReducer,
    image: imagePreviewReducer,
    tabs: tabsReducer,
    auth:authReducer,
    currentUser:currentUserSliceReducer,
    myPosts:myPostsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenExpirationMiddleware)
})
