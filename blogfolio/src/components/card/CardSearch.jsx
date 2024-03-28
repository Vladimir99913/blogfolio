import Astronauts from '../../icon/astronauts.svg'
import LikeDislike from '../../icon/btnLikeDislike.svg'
import Save from '../../icon/btnSave.svg'

export function CardSearch(props) {
  return (
    <div className="card mb-5 w-75 border border-0 border-bottom">
      <div className="row g-0 mb-3">
        <div className="col-md-2">
          <img src={Astronauts} className="img-fluid" alt="Astronauts" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="text-secondary">{props.date}</h6>
            <h5 className="card-title">{props.title}</h5>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between p-3">
        <img src={LikeDislike} alt="LikeDislike" />
        <img src={Save} alt="Save" />
      </div>
    </div>
  )
}
