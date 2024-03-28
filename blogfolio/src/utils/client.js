import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://studapi.teachmeskills.by',
  // timeout: 1000
})

export const setAccessTokenClient = (token) => {
if(!token) return

  client.defaults.headers.common.Authorization = 'Bearer ' + token
}
