export function Input(props) {

  function renderLabel() {
    if (!props.label) return null
    return <label htmlFor={props.id}>{props.label}</label>
  }

  return (
    <>
      {renderLabel()}
      <input
        className="form-control"
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        required />
    </>
  )
}
