import LikeDislike from '../../icon/btnLikeDislike.svg'
import Save from '../../icon/btnSave.svg'
import Astronauts from '../../icon/astronauts.svg'

export function CardSmall({ date, title }) {
  return (
    <div className="card d-flex flex-column border border-0" style={{ maxWidth: '350px', minHeight: '225px' }}>
      <div className="row g-0 mb-3">
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="text-secondary">{date}</h6>
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <div className="col-md-4">
          <img src={Astronauts} className="img-fluid rounded-end" alt="Astronauts" />
        </div>
        <div className="d-flex justify-content-between p-3">
          <img src={LikeDislike} alt="LikeDislike" />
          <img src={Save} alt="Save" />
        </div>
      </div>
    </div>
  )
}
