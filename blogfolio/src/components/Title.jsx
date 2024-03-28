import { useSelector } from 'react-redux'
import { text } from '../config/language/index.js'

export function Title(props) {
  const language = useSelector((state) => state.language.value)
  const languageValue = text[language]

  for (let key in languageValue) {
    if (key == props.title) {
      return (
        <div className="container-sm d-flex flex-column w-75 m-3">
          <button className="btn btn-light w-25 mb-3">{languageValue[key].btnBack}</button>
          <h1 className="fw-bold">{languageValue[key].title}</h1>
        </div>

      )
    }
  }
  return (
    <div className="container-sm d-flex flex-column w-75 m-3">
      <button className="btn btn-light w-25 mb-3">{props.btnBack}{props.id}</button>
      <h1 className="fw-bold">{props.title}</h1>
    </div>
  )
}
