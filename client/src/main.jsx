import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './User/pages/Login.jsx'
import UsersPage from '../../admin/src/User/pages/UsersPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/users-management" element={<UsersPage />} />
        </Routes>
      </App>
    </BrowserRouter>

  </StrictMode>,
)
