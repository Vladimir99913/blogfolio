import { useSelector } from 'react-redux'
import { text } from '../config/language/index.js'

export function SuccessSignUp() {
  const language = useSelector((state) => state.language.value)
  const languageValue = text[language].success

  return (
    <div className="container w-25 h-50 p-4 border">
      <p className="m-0">{languageValue.window.confirm}</p>
      <p className="mb-5">{languageValue.window.completed}</p>
      <button className="btn btn-primary w-100">{languageValue.window.submit}</button>
    </div>
  )
}
