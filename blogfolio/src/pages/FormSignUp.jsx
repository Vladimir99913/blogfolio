import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCreateUser } from '../redux/auth-slice'
import { useNavigate } from 'react-router-dom'
import { Title } from '../components/Title'
import { Input } from '../components/Input'
import { text } from '../config/language/index.js'

export function FormSignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const error = useSelector((state) => state.auth.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector(state => state.auth.currentUser)
  const language = useSelector((state) => state.language.value)
  const languageValue = text[language].signUp

  useEffect(() => {
    if (users) {
      navigate('/auth/activate')
    }
  }, [users])

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }

  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function handleChangeConfirmPassword(event) {
    setConfirmPassword(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Пароли не совпадают!")
    } else {
      const user = {
        username: name,
        email: email,
        password: password,
        course_group: 5
      }
      dispatch(fetchCreateUser(user))
    }
  }

  return (
    <>
      <Title title="signUp" />
      {error ? <h2>{error}</h2> :
        <form className="w-25 border p-3" onSubmit={handleSubmit} >
          <div className="mb-3">
            <Input label={languageValue.form.name.label} type="text" placeholder={languageValue.form.name.placeholder} id="validationDefault01" value={name} onChange={handleChangeName} />
          </div>
          <div className="mb-3">
            <Input label={languageValue.form.email.label} type="email" placeholder={languageValue.form.email.placeholder} id="validationDefault02" value={email} onChange={handleChangeEmail} />
          </div>
          <div className="mb-3">
            <Input label={languageValue.form.password.label} type="password" placeholder={languageValue.form.password.placeholder} id="validationDefault03" value={password} onChange={handleChangePassword} />
          </div>
          <div className="mb-3">
            <Input label={languageValue.form.confirmPassword.label} type="password" placeholder={languageValue.form.confirmPassword.placeholder} id="validationDefault04" value={confirmPassword} onChange={handleChangeConfirmPassword} />
          </div>
          <input type="submit" value={languageValue.form.submit} className="btn btn-primary w-100 mb-3" />
          <p className="text-center">{languageValue.message} <span className="text-primary fw-bold">{text[language].signIn.title}</span> </p>
        </form>
      }
    </>
  )
}
