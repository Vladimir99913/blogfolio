import { client } from '../utils/client'
import { postsEndpoint, myPostsEndpoint } from '../api.js'

async function fetchPosts (params) {
  const {data} = await client.get(postsEndpoint, {params} )
  return data
}

async function fetchPostById(id) {
  const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
  const data = await response.json()
  return data
}

async function fetchMyPosts(params) {
  const {data} = await client.get(myPostsEndpoint, {params} )
  return data
}

async function requestCreatePost (formData) {
  const { data } = await client.post(postsEndpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return data
}

export { fetchPosts, fetchPostById, fetchMyPosts, requestCreatePost }
