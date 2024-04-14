import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  loginPopupVisible: boolean;
  setLoginPopupVisible: (value: boolean) => void;
  registerPopupVisible: boolean;
  setRegisterPopupVisible: (value: boolean) => void;
  openLoginPopup: () => void;
  closeLoginPopup: () => void;
  openRegisterPopup: () => void;
  closeRegisterPopup: () => void;
};

// Tworzenie kontekstu
const AuthContext = createContext <AuthContextType | undefined>(undefined);

// Hook używany do pobierania wartości kontekstu
 const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Tworzenie dostawcy kontekstu
 const AuthProvider: React.FC <{ children: React.ReactNode }> = ({children}) => {
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [registerPopupVisible, setRegisterPopupVisible] = useState(false);

  const openLoginPopup = () => {
    setLoginPopupVisible(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupVisible(false);
  };

  const openRegisterPopup = () => {
    setRegisterPopupVisible(true);
  };

  const closeRegisterPopup = () => {
    setRegisterPopupVisible(false);
  };

  return (
    <AuthContext.Provider 
        value={{ 
          loginPopupVisible,
          registerPopupVisible,
          openLoginPopup,
          closeLoginPopup,
          openRegisterPopup,
          closeRegisterPopup, 
        }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };