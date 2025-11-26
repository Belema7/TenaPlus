import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import MedicineInput from '../pages/MedicineInput'
import NotFound from '../pages/NotFound'
const Routing = () => {
  return (
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/medicineinput' element={<MedicineInput/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )   
}

export default Routing
