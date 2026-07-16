import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryPage from './features/country/pages/CountryPage.jsx'
import UsersPage from './features/user/pages/UsersPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>

          <Route path="/admin/users-management" element={<UsersPage />} />
          <Route path="/admin/country-management" element={<CountryPage />} />
        </Routes>
      </App>
    </BrowserRouter>

  </StrictMode>,
)
