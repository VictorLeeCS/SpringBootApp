import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemPage from './AddItemPage.jsx'
import App from './App.jsx'
import Login from './Login.jsx'
import AfterLogin from './AfterLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addItem" element={<AddItemPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AfterLogin" element={<AfterLogin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
