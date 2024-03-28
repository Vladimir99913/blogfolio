import { useSelector } from 'react-redux'
import { Modal } from './Modal'

export function ImagePreviewModal(props) {
  const imageUrl = useSelector(state => state.image.url)

  return (
    <Modal shown={props.shown} onHidden={props.onHidden}>
      <img src={imageUrl} alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </Modal>
  )
}
