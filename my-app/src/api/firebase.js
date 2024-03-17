import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { firebaseConfig } from './firebase.config'

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)