const base = 'https://studapi.teachmeskills.by'

// Posts
const postsEndpoint = `/blog/posts/`
const myPostsEndpoint = `/blog/posts/my_posts/`

//Auth
const usersEndpoint = `/auth/users/`
const activateUserEndpoint = `/auth/users/activation/`
const jwtToken = `/auth/jwt/create/`
const userMeEndpoint = `/auth/users/me/`
const refreshTokenEndpoint = `/auth/jwt/refresh/`

export {
  postsEndpoint, usersEndpoint, activateUserEndpoint, jwtToken, userMeEndpoint, refreshTokenEndpoint,myPostsEndpoint
}
