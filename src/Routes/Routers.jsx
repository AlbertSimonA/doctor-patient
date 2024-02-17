import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Doctors from '../Pages/Doctors/Doctors'
import DoctorsDetails from '../Pages/Doctors/DoctorsDetails'
import Login from '../Pages/Login'

import Services from '../Pages/Services'
import Signup from '../Pages/Signup'
import Contact from '../Pages/Contact'


const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    

  </Routes>
  )
}

export default Routers