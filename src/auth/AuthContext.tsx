import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  loginPopupVisible: boolean;
  setLoginPopupVisible: (value: boolean) => void;
  registerPopupVisible?: boolean;
  setRegisterPopupVisible?: (value: boolean) => void;
  openLoginPopup: () => void;
  closeLoginPopup: () => void;
  openRegisterPopup?: () => void;
  closeRegisterPopup?: () => void;
};

// Tworzenie kontekstu
const AuthContext = createContext <AuthContextType | undefined>(undefined);

// Hook używany do pobierania wartości kontekstu
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { 
    loginPopupVisible,
    registerPopupVisible,
    openLoginPopup,
    closeLoginPopup,
    openRegisterPopup,
    closeRegisterPopup
  } = context;

  const defaultFunction = () => {};
  const safeOpenRegisterPopup = openRegisterPopup || defaultFunction;
  const safeCloseLoginPopup = closeLoginPopup || defaultFunction;
  const safeCloseRegisterPopup = closeRegisterPopup || defaultFunction;

  return {
    loginPopupVisible,
    registerPopupVisible,
    openLoginPopup,
    closeLoginPopup: safeCloseLoginPopup,
    openRegisterPopup: safeOpenRegisterPopup,
    closeRegisterPopup: safeCloseRegisterPopup
  };
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
          setLoginPopupVisible,
          registerPopupVisible,
          setRegisterPopupVisible,
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