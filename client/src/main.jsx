import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Login from "../src/feature/authentication/pages/Login.jsx"
import UsersPage from '../../admin/src/features/user/pages/UsersPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/users-management" element={<UsersPage />} />
        </Routes>
      </App>
    </BrowserRouter>

  </StrictMode>,
)
