import { auth } from '../api/firebase'
import { Form } from '../components/Form'
import { createUserWithEmailAndPassword } from 'firebase/auth'

console.log(auth)

export const Register = () => {

    const handleSubmit = ({login, password}) => {
        createUserWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
    }
return(
    <>
    <h1>{auth?.currentUser?.email}</h1>
< Form submitText="Zarejestruj się" handleSubmit={handleSubmit} />
</>
)}