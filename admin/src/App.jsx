import AdminPanelLayout from './layouts/AdminPanelLayout'
import UsersPage from './features/user/pages/UsersPage'
import CountryPage from './features/country/pages/CountryPage'
import { Children } from 'react'

function App({children}) {
  return (
    <AdminPanelLayout>
      {children}

    </AdminPanelLayout>
  )
}

export default App
