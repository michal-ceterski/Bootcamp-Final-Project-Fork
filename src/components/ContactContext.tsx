import React, { createContext, useContext, useState } from 'react';

type ContactContextType = {
    contactPopupVisible: boolean;
    setContactPopupVisible: (value: boolean) => void;
    openContactPopup: () => void;
    closeContactPopup: () => void;
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
    } = context;

    return {
        contactPopupVisible,
        openContactPopup,
        closeContactPopup
    };
};

const ContactProvider: React.FC <{ children: React.ReactNode }> = ({children}) => {
    const [contactPopupVisible, setContactPopupVisible] = useState(false);

    const openContactPopup = () => {
        setContactPopupVisible(true);
    };

    const closeContactPopup = () => {
        setContactPopupVisible(false);          
    };

    return (
        <ContactContext.Provider 
            value={{ 
                contactPopupVisible,
                setContactPopupVisible,
                openContactPopup,
                closeContactPopup,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
}
    

export { ContactProvider, useContact };