import React from 'react'

import Routers from '../Routes/Routers'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  return (
    <>

    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
 
    </>
  )
}

export default Layout