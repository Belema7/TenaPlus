import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import {
  Eye,
  EyeOff,
  LogIn,
  Mail,
  Lock,
  ArrowLeft,
  Smartphone
} from 'lucide-react'
import LayOut from '../components/LayOut/LayOut'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  return (
    <LayOut>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center py-12 px-4">

        <div className="w-full max-w-md">

          {/* Back to Home (Left) */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Login Card */}
          <div className="bg-white p-8 border border-emerald-100 rounded-2xl shadow-xl">

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                
                {/* Styled Logo */}
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-emerald-200">
                  <img 
                    src={logo} 
                    alt="TenaPlus Logo" 
                    className="object-cover w-full h-full"
                  />
                </div>

              </div>

              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="mt-2 text-gray-600">Sign in to your TenaPlus account</p>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                  
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="h-4 w-4 text-emerald-600" />
                  Remember me
                </label>

                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-500">
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-emerald-600 to-teal-600 
                hover:from-emerald-700 hover:to-teal-700 shadow-lg transition-all"
              >
                <span className="inline-flex items-center gap-2">
                  <LogIn className="h-5 w-5 text-emerald-200" />
                  Sign In
                </span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-sm text-gray-500">Or continue with</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Phone Login */}
              <button
                type="button"
                className="w-full flex justify-center items-center gap-2 py-3 border border-gray-300 rounded-xl 
                bg-white hover:bg-gray-50 text-sm text-gray-700"
              >
                <Smartphone className="h-5 w-5 text-gray-400" />
                Sign in with Phone
              </button>
            </form>

            {/* Signup */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-emerald-600 hover:text-emerald-500"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>

          {/* Security Note */}
          <p className="text-center mt-4 text-xs text-gray-500">
            Your health data is protected with bank-level security
          </p>
        </div>
      </div>
    </LayOut>
  )
}

export default Login
