import { signInWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../components/Form'
import { auth } from '../api/firebase'
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react'

interface HandleSubmitProps {
    login: string;
    password: string;
}

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = ({login, password}: HandleSubmitProps) => {
        signInWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
    }

return (
    <>
    <div className='form.signUp'>
        <h3>Sign in {auth?.currentUser?.email}</h3>
        <Form submitText="Log in" handleSubmit={handleSubmit}/>
        <span>You dont have an account?</span>
        <button className='button_register' onClick={()=> window.location.replace('/register')}>Sign up</button> 
    </div>
    </>
 )}

export const LevelContext = createContext (auth.currentUser);