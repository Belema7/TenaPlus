import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { DataContext } from '../components/DataProvider/DataProvider'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import MedicineInput from '../pages/MedicineInput'
import NotFound from '../pages/NotFound'
import DailyTasks from '../Dashboard/DailyTasks/DailyTasks'
import AiAssistant from '../Dashboard/AiAssistance/AiAssistant'
import Progress from '../Dashboard/Progress/Progress'

const Routing = () => {
  const [{ user }] = useContext(DataContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route 
        path='/login' 
        element={!user ? <Login /> : <Navigate to="/dashboard" replace />} 
      />
      <Route 
        path='/signup' 
        element={!user ? <Signup /> : <Navigate to="/dashboard" replace />} 
      />

      {/* Protected Dashboard Routes */}
      <Route 
        path='/dashboard' 
        element={user ? <Dashboard /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Navigate to="/dashboard/tasks" replace />} />
        <Route path='medicineinput' element={<MedicineInput />} />
        <Route path='tasks' element={<DailyTasks />} />
        <Route path='aihelp' element={<AiAssistant />} />
        <Route path='progress' element={<Progress />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing