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

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState({
  signIn: false,
  signUp: false,
});
const [error, setError] = useState("");
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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex">
        {/* Left Side - Back to Home */}
        <div className="hidden lg:flex lg:w-1/4 lg:items-start lg:justify-start p-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Center - Login Form */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            {/* Mobile Back to Home */}
            <div className="lg:hidden mb-4">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>

            {/* Login Card - Compact */}
            <div className="bg-white p-6 border border-emerald-100 rounded-xl shadow-lg">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  
                  {/* Styled Logo - Smaller */}
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md ring-2 ring-emerald-200">
                    <img 
                      src={logo} 
                      alt="TenaPlus Logo" 
                      className="object-cover w-full h-full"
                    />
                  </div>

                </div>

                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="mt-1 text-sm text-gray-600">Sign in to your TenaPlus account</p>
              </div>

              {/* Login Form - Compact */}
              <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-2.5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg placeholder-gray-400 
                      focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="h-4 w-4 text-gray-400 absolute left-3 top-2.5" />
                    
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-9 pr-10 py-2 text-sm border border-gray-300 rounded-lg placeholder-gray-400 
                      focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-1.5 text-gray-700">
                    <input type="checkbox" className="h-3 w-3 text-emerald-600" />
                    Remember me
                  </label>

                  <a href="#" className="text-emerald-600 hover:text-emerald-500">
                    Forgot password?
                  </a>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-emerald-600 to-teal-600 
                  hover:from-emerald-700 hover:to-teal-700 shadow-md transition-all"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <LogIn className="h-4 w-4 text-emerald-200" />
                    Sign In
                  </span>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-xs text-gray-500">Or continue with</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Phone Login */}
                <button
                  type="button"
                  className="w-full flex justify-center items-center gap-1.5 py-2 text-xs border border-gray-300 rounded-lg 
                  bg-white hover:bg-gray-50 text-gray-700"
                >
                  <Smartphone className="h-4 w-4 text-gray-400" />
                  Sign in with Phone
                </button>
              </form>

              {/* Signup */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-600">
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
            <p className="text-center mt-3 text-xs text-gray-500">
              Your health data is protected with bank-level security
            </p>
          </div>
        </div>

        {/* Right Side - Empty for balance */}
        <div className="hidden lg:block lg:w-1/4"></div>
      </div>
    </LayOut>
  )
}

export default Login