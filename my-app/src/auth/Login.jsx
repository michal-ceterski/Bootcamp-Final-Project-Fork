import { signInWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../components/Form'
import { auth } from '../api/firebase'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = ({login, password}) => {
        signInWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
    }

return (
    <>
    <h1>{auth?.currentUser?.email}</h1>
<Form submitText="Zaloguj się" handleSubmit={handleSubmit}/>
</>
 )}