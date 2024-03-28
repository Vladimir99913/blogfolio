import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserThumbnail } from './UserThumbnail';
import { setLogout } from '../../redux/auth-slice';

export function BurgerContent(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)

  function handleClickLogOut(event) {
    event.preventDefault()
    dispatch(setLogout())
    navigate('/')
  }

  function handleClickSignIn(event) {
    event.preventDefault()
    navigate('/sign-in')
  }

  function renderContent() {
    if (!props.isOpen) return null
    if (token) {
      return (
        <div className="d-flex flex-column justify-content-between bg-light" style={{ minWidth: '200px', minHeight: '450px', position: 'absolute', zIndex: '1' }}>
          <ul className="list-group list-group-flush" >
            <li>
              <div className="d-flex align-items-center justify-content-evenly bg-primary border-top" style={{ maxWidth: '200px', minHeight: '50px' }}>
                <UserThumbnail />
              </div>
            </li>
            <li>
              <NavLink to="/posts/new" className="list-group-item text-center">New Post</NavLink>
            </li>
            <li>
              <NavLink to="/posts/page/1" className="list-group-item text-center">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/my-posts/page/1" className="list-group-item text-center">My posts</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in" className="list-group-item text-center">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" className="list-group-item text-center">Sign Up</NavLink>
            </li>
          </ul>
          <button className="btn btn-secondary" onClick={handleClickLogOut}>Log out</button>
        </div>
      )
    }
    else {
      return (
        <div className="d-flex flex-column justify-content-between bg-light" style={{ minWidth: '200px', minHeight: '450px', position: 'absolute', zIndex: '1' }}>
          <ul className="list-group list-group-flush" >
            <li>
              <NavLink to="/" className="list-group-item text-center">Home</NavLink>
            </li>
          </ul>
          <button className="btn btn-secondary" onClick={handleClickSignIn}>Sign In</button>
        </div>)
    }
  }

  return (
    renderContent()
  )
}
