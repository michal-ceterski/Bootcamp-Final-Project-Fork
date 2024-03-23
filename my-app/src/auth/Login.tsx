import { signInWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../components/Form.tsx'
import { auth } from '../api/firebase.js'
import { useNavigate } from 'react-router-dom'

interface HandleSubmitProps {
    login: string;
    password: String;
}

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = ({login, password}: HandleSubmitProps) => {
        signInWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
    }

return (
    <>
    <h1>{auth?.currentUser?.email}</h1>
<Form submitText="Zaloguj się" handleSubmit={handleSubmit}/>
</>
 )}