import {jwtDecode} from 'jwt-decode'

export function isTokenExpired(token) {
  const decode = jwtDecode(token)

  if(decode.exp < Date.now() / 1000) {
    return true
  }
  return false
}
