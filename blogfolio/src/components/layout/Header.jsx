import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../redux/language-slice'
import { Hamburger } from './Hamburger'
import { BurgerContent } from './BurgerContent'
import User from '../../icon/user.svg'
import Search from '../../icon/search.svg'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { UserThumbnail } from './UserThumbnail';

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [className, setClassName] = useState('btn btn-primary burger')
  const language = useSelector(state => state.language.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  function handleChange(event) {
    dispatch(setLanguage(event.target.value))
  }

  function handleClickUser() {
    navigate('/sign-in')
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/posts/search/${search}`)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid" style={{ position: 'relative', zIndex: '1' }}>
          <Hamburger isOpen={isOpen} className={className} setIsOpen={setIsOpen} setClassName={setClassName} />
          {/* <NavLink to="/" className="navbar-brand">Brand</NavLink> */}
          <form className="collapse navbar-collapse" id="navbarNav" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChangeSearch}></input>
            <button className="btn btn-primary" type='submit' {...{ disabled: !search }}> <img src={Search} alt="Search" ></img></button>
          </form>
          <div className="d-flex">
            <button className="btn btn-primary" onClick={handleClickUser}> <img src={User} alt="User"></img></button>
            <UserThumbnail />
            <select value={language} className="form-select" onChange={handleChange}>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </div>
        </div>
      </nav>
      <BurgerContent isOpen={isOpen} />
    </>
  )
}
