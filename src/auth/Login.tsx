import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../components/Form';
import { auth } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

import './Login.css';

interface HandleSubmitProps {
    login: string;
    password: string;
}

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = ({login, password}: HandleSubmitProps) => {
        signInWithEmailAndPassword(auth, login, password)
            .then(() => {navigate('/')})
            .then((e) => console.log(e))
    }

return (
    <>
    <div className='formSignUp'>
        <h3>Sign In </h3>
        <Form submitText="Login" handleSubmit={handleSubmit}/>
        <span>You dont have an account?</span>
        <button className='button_register' onClick={()=> window.location.replace('/register')}>Sign up</button> 
    </div>
    </>
)};