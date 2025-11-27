
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
// In your Dashboard.jsx or Layout component
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main content area with left margin */}
      <div className="ml-64"> {/* This matches the sidebar width (w-64) */}
        <DashboardHeader />
        
        {/* Page content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
