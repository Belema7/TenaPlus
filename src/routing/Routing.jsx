import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { DataContext } from '../components/DataProvider/DataProvider'

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import MedicineInput from '../pages/MedicineInput'
import NotFound from '../pages/NotFound'
import DailyTasks from '../Dashboard/DailyTasks/DailyTasks'
import AiAssistant from '../Dashboard/AiAssistance/AiAssistant'
import Progress from '../Dashboard/Progress/Progress'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const Routing = () => {
  const [{ user }] = useContext(DataContext)

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Prevent logged-in user from seeing Login page */}
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
      />

      {/* ✅ Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute msg="Please sign in to view your dashboard" redirect="/dashboard">
            <Dashboard />
          </ProtectedRoute>
        }
      >
        {/* Default redirect */}
        <Route index element={<Navigate to="/dashboard/tasks" replace />} />

        {/* Nested pages */}
        <Route path="medicineinput" element={<MedicineInput />} />
        <Route path="tasks" element={<DailyTasks />} />
        <Route path="aihelp" element={<AiAssistant />} />
        <Route path="progress" element={<Progress />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing
