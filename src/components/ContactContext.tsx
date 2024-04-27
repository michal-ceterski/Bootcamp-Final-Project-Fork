import React, { createContext, useContext, useState ,useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";

type ContactContextType = {
    contactPopupVisible: boolean;
    setContactPopupVisible: (value: boolean) => void;
    openContactPopup: () => void;
    closeContactPopup: () => void;
    roomdata: any[];
    setRoomdata: (value: any[]) => void;
};

const ContactContext = createContext <ContactContextType | undefined>(undefined);

const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error("useContact must be used within an ContactProvider");
    }

    const { 
        contactPopupVisible,
        setContactPopupVisible,
        openContactPopup,
        closeContactPopup,
        roomdata,
        setRoomdata
    } = context;

    return {
        contactPopupVisible,
        openContactPopup,
        closeContactPopup,
        roomdata,
        setRoomdata
    };
};

const ContactProvider: React.FC <{ children: React.ReactNode }> = ({children}) => {
    const [contactPopupVisible, setContactPopupVisible] = useState(false);
    const [roomdata, setRoomdata] = useState([]);
    const docsRef = collection(db, "rooms")
    
    const openContactPopup = () => {
        setContactPopupVisible(true);
    };

    const closeContactPopup = () => {
        setContactPopupVisible(false);          
    };

    useEffect(() => {
        getDocs(docsRef).then((snapshot) => 
            snapshot.docs.map((doc) => {
                console.log(doc.data())
                return {...doc.data()}
            })
        )
        .then((data) => {
            setRoomdata(data)
        })
        ;

    }, [])

    return (
        <ContactContext.Provider 
            value={{ 
                contactPopupVisible,
                setContactPopupVisible,
                openContactPopup,
                closeContactPopup,
                roomdata,
                setRoomdata
            }}
        >
            {children}
        </ContactContext.Provider>
    );
}
    

export { ContactProvider, useContact };