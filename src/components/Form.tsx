import { useState, FormEvent }  from "react"
import { useTranslation } from "react-i18next"

interface FormProps {
  submitText: string,
  isPasswordHidden?: boolean,
  handleSubmit: (options:{login: string, password: string}) => unknown,
}
// eslint-disable-next-line react/prop-types
export const Form = ({ submitText, isPasswordHidden = false, handleSubmit } : FormProps) => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {t} =useTranslation()

    const onSubmit = (e : FormEvent)  => {
        e.preventDefault()
        return handleSubmit({login, password})
    }
    return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">{t('Login')}</label>
        <input type="email" name="email" id="email" value={login} onChange={(e) => setLogin(e.target.value)} />
      </div>
      {!isPasswordHidden && (
        <div>
          <label htmlFor="password">{t('Password')}</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
      )}
      <button type="submit">{submitText}</button>
      
    </form>
  )}