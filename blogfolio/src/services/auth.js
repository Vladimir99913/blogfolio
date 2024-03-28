import { client } from '../utils/client'
import {usersEndpoint, activateUserEndpoint, jwtToken, userMeEndpoint, refreshTokenEndpoint} from '../api'

async function fetchCreate(user) {
  const responce = await client.post(usersEndpoint, user)
  return responce.data
}

async function fetchActivate(tokenActivate) {
  const responce = await client.post(activateUserEndpoint, tokenActivate)
  return responce.data
}

async function fetchAuth(user) {
  const responce = await client.post(jwtToken, user)
  return responce.data
}

async function fetchCurrentUser(token) {
  const responce = await client.get(userMeEndpoint, token)
  return responce.data
}

async function requestRefreshToken (body) {
  const responce = await client.post(refreshTokenEndpoint, body)
  return responce.data
}

export {fetchActivate, fetchCreate, fetchAuth, fetchCurrentUser, requestRefreshToken}
