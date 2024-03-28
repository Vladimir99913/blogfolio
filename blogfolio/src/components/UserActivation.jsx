import { useSelector } from 'react-redux'
import { text } from '../config/language/index.js'

export function UserActivation() {
  const language = useSelector((state) => state.language.value)
  const languageValue = text[language].success

  return (
    <div className="container w-25 h-50 p-4 border">
      <p className="mb-2">Сomplete activation for successful registration</p>
      <button className="btn btn-primary w-100">Ok</button>
    </div>
  )
}
