import Prev from '../../icon/cardPostPrev.svg'
import Next from '../../icon/cardPostNext.svg'
import Like from '../../icon/Up.svg'
import Dislike from '../../icon/Down.svg'
import SaveFalse from '../../icon/Save.svg'
import SaveTrue from '../../icon/SaveTrue.svg'

export function CardLarge(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: '850px' }}>
      <div style={{ width: '100%', height: '600px' }}>
        <img src={props.image} className="card-img-top" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="card-body">
        {props.description}
      </div>
      <div className="d-flex justify-content-between p-1">
        <div>
          <button className="btn btn-outline-primary me-1" style={{ minWidth: '80px' }}><img src={Like} alt="Like" /><span className="fw-bold ms-1">{props.like}</span></button>
          <button className="btn btn-outline-danger" style={{ minWidth: '80px' }}><img src={Dislike} alt="Dislike" /><span className="fw-bold ms-1">{props.dislike}</span></button>
        </div>
        <div>
          <button className="btn btn-light" ><img className="me-2" src={props.isFavorite ? SaveTrue : SaveFalse} alt="Save" />Add to favorites</button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-1" style={{ minHeight: '150px' }}>
        <img src={Prev} alt="Prev" />
        <img src={Next} alt="Next" />
      </div>
    </div>
  )
}
