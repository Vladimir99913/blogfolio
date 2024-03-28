import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from '../components/Title'
import { Input } from '../components/Input'
import { text } from '../config/language/index.js'
import { fetchAuthThunk } from '../redux/auth-slice'
import { useNavigate } from 'react-router-dom'

export function FormSignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const language = useSelector((state) => state.language.value)
  const error = useSelector((state) => state.auth.error)
  const languageValue = text[language].signIn

  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }

  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      email: email,
      password: password
    }
    dispatch(fetchAuthThunk(user))
  }

  return (
    <>
      <Title title="signIn" />
      <form className="w-25 border p-3" onSubmit={handleSubmit} >
        <div className="mb-3">
          <Input label={languageValue.form.email.label} type="email" placeholder={languageValue.form.email.placeholder} id="validationDefault02" value={email} onChange={handleChangeEmail} />
        </div>
        <div className="mb-3">
          <Input label={languageValue.form.password.label} type="password" placeholder={languageValue.form.password.placeholder} id="validationDefault03" value={password} onChange={handleChangePassword} />
        </div>
        <input type="submit" value={languageValue.form.submit} className="btn btn-primary w-100 mb-3" />
        <p className="text-center">{languageValue.message} <span className="text-primary fw-bold">{text[language].signUp.title}</span> </p>
      </form>
    </>
  )
}
