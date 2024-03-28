import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLike, setDislike, setFavorite } from '../../redux/posts-slice.js'
import { setImage, showModal } from '../../redux/image-preview-slice.js'
import Like from '../../icon/Up.svg'
import Dislike from '../../icon/Down.svg'
import SaveFalse from '../../icon/Save.svg'
import SaveTrue from '../../icon/SaveTrue.svg'
import Dots from '../../icon/Dots.svg'

export function CardMiddle(props) {
  const dispatch = useDispatch()

  function handleClickLike() {
    dispatch(setLike(props.id))
  }

  function handleClickDislike() {
    dispatch(setDislike(props.id))
  }

  function handleClickFavorite() {
    dispatch(setFavorite(props.id))
  }

  function handleClickToggle() {
    dispatch(setImage(props.image))
    dispatch(showModal())
  }

  return (
    <>
      <div className="card border border-0" >
        <div style={{ width: '100%', height: '400px' }}>
          <img src={props.image} className="card-img-top" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onClick={handleClickToggle} />
        </div>
        <div className="card-body">
          <div style={{ minHeight: '100px' }}>
            <h6 className="text-secondary">{props.date}</h6>
            <h4 className="card-title mb-4">{props.title}</h4>
          </div>
          <NavLink to={`/posts/${props.id}`}><button className="btn btn-primary m-2 w-100">Open</button></NavLink>
          <div className="d-flex justify-content-between">
            <div>
              <button className="btn btn-outline-primary me-1" onClick={handleClickLike} style={{ minWidth: '80px' }}><img src={Like} alt="Like" /><span className="fw-bold ms-1">{props.like}</span></button>
              <button className="btn btn-outline-danger" onClick={handleClickDislike} style={{ minWidth: '80px' }}><img src={Dislike} alt="Dislike" /><span className="fw-bold ms-1">{props.dislike}</span></button>
            </div>
            <div>
              <button className="btn btn-outline-light" onClick={handleClickFavorite}><img src={props.isFavorite ? SaveTrue : SaveFalse} alt="Save" /></button>
              <button className="btn btn-outline-secondary"><img src={Dots} alt="Dots" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
