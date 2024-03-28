import { useSelector } from 'react-redux'
import { Modal } from './Modal'

export function UserProfileModal(props) {
  const userData = useSelector(state => state.currentUser.userData)

  let username = null
  let userEmail = null
  if (userData) {
    username = userData.username
    userEmail = userData.email
  }

  return (
    <Modal shown={props.shown} onHidden={props.onHidden}>
      <h1>Your profile</h1>
      <p>{username}</p>
      <p>{userEmail}</p>
    </Modal>
  )
}
