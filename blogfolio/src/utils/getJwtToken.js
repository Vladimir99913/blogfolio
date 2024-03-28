export function getJwtToken() {
  const localToken = localStorage.getItem('token')

  if(!localToken) return null

  const token = JSON.parse(localToken)

  return token
}
