import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './AuthContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import AddItemPage from './AddItemPage.jsx'
import App from './App.jsx'
import Login from './Login.jsx'
import AfterLogin from './AfterLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route 
            path="/addItem" 
            element={
              <ProtectedRoute>
                <AddItemPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/AfterLogin" 
            element={
              <ProtectedRoute>
                <AfterLogin />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
