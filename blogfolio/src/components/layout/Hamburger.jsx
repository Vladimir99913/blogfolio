import '../../styles/Hamburger.css'

export function Hamburger(props) {

  function toggle() {
    props.setIsOpen(!props.isOpen)
  }

  function handleClickToggle() {
    toggle()
    if (props.className == 'btn btn-primary burger active') {
      props.setClassName('btn btn-primary burger')
    } else {
      props.setClassName('btn btn-primary burger active')
    }
  }

  return (
    <>
      <div>
        <button className={props.className} onClick={handleClickToggle}><span></span></button>
      </div>
    </>
  )
}


