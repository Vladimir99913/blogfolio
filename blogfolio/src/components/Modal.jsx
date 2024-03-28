import '../styles/Modal.css'

export function Modal({ shown, onHidden, children }) {

  function handleClickToggle() {
    onHidden(!shown)
  }

  return (
    <div className={shown ? "modall active" : "modall"} onClick={handleClickToggle}>
      <div className={shown ? "modall-content active" : "modall-content"} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
