import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import MedicineInput from '../pages/MedicineInput'
import NotFound from '../pages/NotFound'
import DailyTasks from '../Dashboard/DailyTasks/DailyTasks'
import AiAssistant from '../Dashboard/AiAssistance/AiAssistant.jsx'   // <-- FIXED




const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      {/* Dashboard with nested routes */}
      <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<div>Dashboard Home - Add your dashboard content here</div>} />
        <Route path='medicineinput' element={<MedicineInput />} />
        <Route path='tasks' element={<DailyTasks />} />
        <Route path='aihelp' element={<AiAssistant />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing