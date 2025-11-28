import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader'
import { 
  Activity, 
  Heart, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  Calendar,
  ArrowRight,
  Pill,
  Users,
  Menu
} from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [stats, setStats] = useState({
    tasksCompleted: 0,
    medicationAdherence: 0,
    dailyProgress: 0,
    streak: 0
  })
  const [recentActivity, setRecentActivity] = useState([])
  const [upcomingTasks, setUpcomingTasks] = useState([])

  // Check if we're on the main dashboard route (not a nested route)
  const isMainDashboard = location.pathname === '/dashboard'

  useEffect(() => {
    // Only load dashboard data if we're on the main dashboard
    if (isMainDashboard) {
      const loadDashboardData = () => {
        setStats({
          tasksCompleted: 12,
          medicationAdherence: 85,
          dailyProgress: 65,
          streak: 7
        })

        setRecentActivity([
          { id: 1, action: 'Morning medication taken', time: '2 hours ago', type: 'success' },
          { id: 2, action: 'Walk completed', time: '1 hour ago', type: 'success' },
          { id: 3, action: 'Water intake reminder', time: '30 minutes ago', type: 'info' },
          { id: 4, action: 'Missed afternoon medication', time: '15 minutes ago', type: 'warning' }
        ])

        setUpcomingTasks([
          { id: 1, title: 'Evening Medication', time: '19:00', type: 'medication' },
          { id: 2, title: 'Dinner', time: '19:30', type: 'nutrition' },
          { id: 3, title: 'Relaxation Time', time: '21:00', type: 'rest' }
        ])
      }

      loadDashboardData()
    }
  }, [isMainDashboard])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false)
    }
  }, [location.pathname])

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getActivityIcon = (type) => {
    const icons = {
      success: <CheckCircle2 className="h-4 w-4 text-green-500" />,
      warning: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
      info: <Clock className="h-4 w-4 text-blue-500" />
    }
    return icons[type] || <Activity className="h-4 w-4 text-gray-500" />
  }

  const getTaskIcon = (type) => {
    const icons = {
      medication: <Pill className="h-4 w-4 text-red-500" />,
      nutrition: <Heart className="h-4 w-4 text-green-500" />,
      exercise: <Activity className="h-4 w-4 text-blue-500" />,
      rest: <Clock className="h-4 w-4 text-purple-500" />
    }
    return icons[type] || <Activity className="h-4 w-4 text-gray-500" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Sidebar 
    isOpen={sidebarOpen} 
    onClose={() => setSidebarOpen(true)} 
/>

      
      {/* Main content area with responsive margin - FIXED */}
      <div className={`
        min-h-screen transition-all duration-300
        ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-64'}
      `}>
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">U</span>
              </div>
              <span className="text-sm font-medium text-gray-900">TenaPlus</span>
            </div>
          </div>
        </div>

        <DashboardHeader />
        
        {/* Dashboard Content */}
        <div className="p-4 lg:p-6">
          {/* Conditionally render Dashboard content only on main dashboard */}
          {isMainDashboard ? (
            <>
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Welcome back! 👋
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Here's your health overview for today. Keep up the great work!
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {/* Tasks Completed */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stats.tasksCompleted}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Tasks Completed Today</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(stats.tasksCompleted / 20) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Medication Adherence */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
                      <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <span className={`text-base sm:text-lg font-bold ${getProgressColor(stats.medicationAdherence)}`}>
                      {stats.medicationAdherence}%
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stats.medicationAdherence}%</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Medication Adherence</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${stats.medicationAdherence}%` }}
                    ></div>
                  </div>
                </div>

                {/* Daily Progress */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                      <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                    </div>
                    <span className={`text-base sm:text-lg font-bold ${getProgressColor(stats.dailyProgress)}`}>
                      {stats.dailyProgress}%
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stats.dailyProgress}%</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Daily Progress</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${stats.dailyProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Current Streak */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-orange-100 rounded-lg">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                    </div>
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stats.streak} days</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Current Streak</p>
                  <div className="mt-2 flex items-center gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          i < stats.streak ? 'bg-orange-500' : 'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Recent Activity
                    </h2>
                    <button 
                      onClick={() => navigate('/dashboard/tasks')}
                      className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      View All
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-3 sm:gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        {getActivityIcon(activity.type)}
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium text-sm sm:text-base">{activity.action}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    Upcoming Tasks
                  </h2>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {upcomingTasks.map((task) => (
                      <div key={task.id} className="flex items-center gap-2 sm:gap-3 p-3 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                        {getTaskIcon(task.type)}
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium text-sm sm:text-base">{task.title}</p>
                          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {task.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => navigate('/dashboard/tasks')}
                    className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base"
                  >
                    View Full Schedule
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Quick Actions</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <button 
                    onClick={() => navigate('/dashboard/medicineinput')}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg w-fit mb-2 sm:mb-3 group-hover:bg-blue-200 transition-colors">
                      <Pill className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Add Medication</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Update your medication list</p>
                  </button>

                  <button 
                    onClick={() => navigate('/dashboard/tasks')}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all text-left group"
                  >
                    <div className="p-2 bg-green-100 rounded-lg w-fit mb-2 sm:mb-3 group-hover:bg-green-200 transition-colors">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">View Tasks</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Check your daily routine</p>
                  </button>

                  <button 
                    onClick={() => navigate('/dashboard/progress')}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all text-left group"
                  >
                    <div className="p-2 bg-purple-100 rounded-lg w-fit mb-2 sm:mb-3 group-hover:bg-purple-200 transition-colors">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Progress</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">View your health journey</p>
                  </button>

                  <button 
                    onClick={() => navigate('/dashboard/aihelp')}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all text-left group"
                  >
                    <div className="p-2 bg-orange-100 rounded-lg w-fit mb-2 sm:mb-3 group-hover:bg-orange-200 transition-colors">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">AI Assistant</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Get health advice</p>
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Show only the nested route content when not on main dashboard
            <Outlet />
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard