import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from '../components/Title'
import { SuccessSignUp } from '../components/SuccessSignUp'
import { UserActivation } from '../components/UserActivation'
import { fetchActivateUser } from '../redux/auth-slice'

export function AuthActivatePage() {
  const isActivate = useSelector(state => state.auth.isActivate)
  const dispatch = useDispatch()
  const { uid, token } = useParams()
  const tokenActivate = {
    uid,
    token,
  }

  useEffect(() => {
    console.log(tokenActivate)
    dispatch(fetchActivateUser(tokenActivate))
  }, [])

  function renderSuccess() {
    if (isActivate) {
      return (
        <>
          <Title title="success" />
          <SuccessSignUp />
        </>
      )
    } else {
      return (
        <>
          <Title title="Activation" btnBack="Back to Sign Up" />
          <UserActivation />
        </>
      )
    }
  }

  return (
    renderSuccess()
  )
}
