import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Heart, 
  Activity,
  Utensils,
  Moon,
  Sun,
  Coffee,
  Bell,
  ArrowLeft,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react'

const DailyTasks = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Sample AI-generated tasks based on medication input
  const sampleTasks = [
    {
      id: 1,
      title: "Take Morning Medication",
      description: "Take your prescribed medication with breakfast",
      time: "08:00",
      completed: false,
      type: "medication",
      icon: Heart,
      priority: "high"
    },
    {
      id: 2,
      title: "Morning Walk",
      description: "15-minute brisk walk to improve circulation",
      time: "08:30",
      completed: false,
      type: "exercise",
      icon: Activity,
      priority: "medium"
    },
    {
      id: 3,
      title: "Drink Water",
      description: "Stay hydrated with a glass of water",
      time: "09:00",
      completed: false,
      type: "hydration",
      icon: Coffee,
      priority: "low"
    },
    {
      id: 4,
      title: "Healthy Breakfast",
      description: "Balanced meal with protein and fiber",
      time: "09:30",
      completed: false,
      type: "nutrition",
      icon: Utensils,
      priority: "medium"
    },
    {
      id: 5,
      title: "Mid-day Medication",
      description: "Take your afternoon dose",
      time: "14:00",
      completed: false,
      type: "medication",
      icon: Heart,
      priority: "high"
    },
    {
      id: 6,
      title: "Light Stretching",
      description: "10 minutes of gentle stretching exercises",
      time: "15:00",
      completed: false,
      type: "exercise",
      icon: Activity,
      priority: "medium"
    },
    {
      id: 7,
      title: "Evening Medication",
      description: "Take your evening medication with dinner",
      time: "19:00",
      completed: false,
      type: "medication",
      icon: Heart,
      priority: "high"
    },
    {
      id: 8,
      title: "Relaxation Time",
      description: "Wind down with meditation or light reading",
      time: "21:00",
      completed: false,
      type: "rest",
      icon: Moon,
      priority: "low"
    }
  ]

  useEffect(() => {
    // Simulate AI generating tasks based on medication data
    const generateTasks = () => {
      setLoading(true)
      
      // In real app, this would be an API call to your AI service
      setTimeout(() => {
        setTasks(sampleTasks)
        setLoading(false)
      }, 1500)
    }

    generateTasks()

    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const getCompletedCount = () => {
    return tasks.filter(task => task.completed).length
  }

  const getUpcomingTasks = () => {
    const currentTimeString = currentTime.toTimeString().slice(0,5)
    return tasks.filter(task => task.time > currentTimeString && !task.completed)
  }

  const getTaskTypeColor = (type) => {
    const colors = {
      medication: 'bg-red-100 text-red-600 border-red-200',
      exercise: 'bg-blue-100 text-blue-600 border-blue-200',
      nutrition: 'bg-green-100 text-green-600 border-green-200',
      hydration: 'bg-cyan-100 text-cyan-600 border-cyan-200',
      rest: 'bg-purple-100 text-purple-600 border-purple-200'
    }
    return colors[type] || 'bg-gray-100 text-gray-600 border-gray-200'
  }

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500'
    }
    return colors[priority] || 'bg-gray-500'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="h-8 w-8 text-white animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Generating Your Health Plan</h2>
          <p className="text-gray-600">AI is creating your personalized daily routine...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Daily Health Plan</h1>
          <p className="text-gray-600">AI-generated routine tailored to your health needs</p>
          
          {/* Progress Stats */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-emerald-100">
              <div className="text-2xl font-bold text-emerald-600">{getCompletedCount()}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-emerald-100">
              <div className="text-2xl font-bold text-blue-600">{tasks.length - getCompletedCount()}</div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-emerald-100">
              <div className="text-2xl font-bold text-purple-600">{tasks.length}</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => navigate('/dashboard/medicineinput')}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Medications
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="h-4 w-4" />
            Regenerate Plan
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            Export Plan
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-emerald-600" />
              Today's Schedule
            </h2>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`border rounded-lg p-4 transition-all duration-200 ${
                    task.completed 
                      ? 'bg-emerald-50 border-emerald-200' 
                      : 'bg-white border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleTaskCompletion(task.id)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-gray-300 hover:border-emerald-400'
                      }`}
                    >
                      {task.completed && <CheckCircle2 className="h-4 w-4" />}
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getTaskTypeColor(task.type)}`}>
                          {task.type}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`}></div>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {task.time}
                        </span>
                      </div>
                      
                      <h3 className={`font-semibold ${
                        task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                      }`}>
                        {task.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mt-1">
                        {task.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <task.icon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming & Insights */}
          <div className="space-y-6">
            {/* Next Up */}
            <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-600" />
                Next Up
              </h2>
              
              {getUpcomingTasks().length > 0 ? (
                <div className="space-y-3">
                  {getUpcomingTasks().slice(0, 3).map((task) => (
                    <div key={task.id} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <task.icon className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{task.title}</div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {task.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-500">
                  <CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <p>All tasks completed for today!</p>
                </div>
              )}
            </div>

            {/* Daily Insights */}
            <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Daily Insights
              </h2>
              
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="font-medium text-purple-900">Medication Adherence</div>
                  <div className="text-sm text-purple-700">
                    Taking medications on time improves effectiveness by 30%
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="font-medium text-green-900">Exercise Benefits</div>
                  <div className="text-sm text-green-700">
                    Regular walking can help manage blood pressure and improve mood
                  </div>
                </div>
                
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <div className="font-medium text-cyan-900">Hydration Tip</div>
                  <div className="text-sm text-cyan-700">
                    Stay hydrated to support medication absorption and overall health
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyTasks