import { collection, doc, getDoc} from 'firebase/firestore'
import { db } from "../api/firebase"

export type Room = {id: number,
roomname: string,
roomdescription: string,
price: number,
surface: number,
people: number,
url: string,
}

const roomdata = [];   
for(let i=1; i<100 ; i++){
    const docRef = doc(db, "rooms", `room${i}`)  
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        roomdata.push(docSnap.data());
      } else {
        break;
      }
    }

export default roomdata;