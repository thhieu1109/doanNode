import { Children, useState } from 'react'
import Header from './components/layouts/Header'



function App({ children }) {


  return (
    <>
     <Header />
      {children}

    </>
  )
}

export default App
