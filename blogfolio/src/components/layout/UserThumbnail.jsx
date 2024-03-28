import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfileModal } from '../UserProfileModal'
import { CurrentUserThunk, showModal, hideModal } from '../../redux/current-user-slice'

export function UserThumbnail() {
  const token = useSelector(state => state.auth.token)
  const userData = useSelector(state => state.currentUser.userData)
  const shownModal = useSelector(state => state.currentUser.shownModal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CurrentUserThunk())
  }, [token])

  let username = null
  let initials = null
  if (userData) {
    username = userData.username
    initials = username[0]
  }

  function handleClickProfile() {
    dispatch(showModal())
  }

  function onHidden() {
    dispatch(hideModal())
  }

  if (!token) return null

  return (
    <>
      <div className="d-flex justify-content-evenly text-white m-1">
        <button className="btn btn-secondary text-white fs-6 me-2" onClick={handleClickProfile}>{initials}</button>
        <span className="fs-5">{username}</span>
      </div>
      <UserProfileModal shown={shownModal} onHidden={onHidden} />
    </>
  )
}
