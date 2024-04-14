import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserContextProvider } from './auth/UserContext';
import { AuthProvider } from './auth/AuthContext';
import { ContactProvider } from './components/ContactContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <AuthProvider>
        <ContactProvider>
          <App />
          </ContactProvider>
        </AuthProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
