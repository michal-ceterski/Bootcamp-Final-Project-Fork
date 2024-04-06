import { auth } from '../api/firebase'
import { Form } from '../components/Form'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import './Register.css';

console.log(auth);

interface HandleSubmitProps {
    login: string;
    password: string;
}

export const Register = () => {

    const handleSubmit = ({login, password} : HandleSubmitProps) => {
        createUserWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
    }
return (
    <>
    <div className="formSignUp">
        <h3>Sign Up </h3>
        < Form submitText="Sign up" handleSubmit={handleSubmit} />
    </div>
    </>
)}