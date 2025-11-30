import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../components/DataProvider/DataProvider';
import { Type } from '../Utility/action.type';
import logo from '../assets/images/logo.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  // Sign In
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, signIn: true });
    setError("");
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: Type.SET_USER, user: userInfo.user });
      setEmail(""); setPassword("");
      navigate("/dashboard/tasks");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({ ...loading, signIn: false });
    }
  };

  // Sign Up
  const handleSignUp = async () => {
    setLoading({ ...loading, signUp: true });
    setError("");
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: Type.SET_USER, user: userInfo.user });
      setEmail(""); setPassword("");
      navigate("/dashboard/tasks");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({ ...loading, signUp: false });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-blue-50 to-emerald-50 flex flex-col items-center justify-center py-8 px-4">
      
      {/* Back to Home Link */}
      <Link to='/' className="w-full max-w-sm mb-8">
        <button
          className="flex items-center justify-center bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          Back to Home
        </button>
      </Link>

      {/* Login/Signup Card */}
      <section className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {/* Logo */}
        <Link to="/" className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-16" />
            <span className="text-2xl font-bold text-gray-900">TenaPlus</span>
          </div>
        </Link>

        {/* Form */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Sign in</h1>
          {error && <p className="text-xs text-red-600 mb-4 p-2 bg-red-50 rounded border border-red-200">{error}</p>}

          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={loading.signIn}
              className={`w-full ${loading.signIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'} text-white font-medium py-3 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md mb-4`}
            >
              {loading.signIn ? "Please wait..." : "Continue"}
            </button>
          </form>

          <p className="text-xs text-gray-600 mb-4">
            By continuing, you agree to TenaPlus's{" "}
            <Link to="/terms" className="text-teal-600 hover:text-teal-700 hover:underline">Terms of Service</Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-teal-600 hover:text-teal-700 hover:underline">Privacy Notice</Link>.
          </p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="shrink mx-4 text-xs text-gray-500 bg-white px-2">New to TenaPlus?</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Sign Up */}
        <button 
          type="button"
          onClick={handleSignUp}
          disabled={loading.signUp}
          className={`w-full ${loading.signUp ? 'bg-gray-300 cursor-not-allowed' : 'bg-white hover:bg-gray-50 border-gray-300'} text-gray-900 font-medium py-3 rounded-lg border shadow-sm transition-all duration-200 hover:shadow-md flex items-center justify-center space-x-2 mb-4`}
        >
          {loading.signUp ? "Please wait..." : "Create your TenaPlus account"}
        </button>

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-600">
            <Link to="/terms" className="hover:text-teal-600 hover:underline">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-teal-600 hover:underline">Privacy Notice</Link>
            <Link to="/help" className="hover:text-teal-600 hover:underline">Help Center</Link>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">© 2024 TenaPlus. Your health, our priority.</p>
        </div>

      </section>
    </div>
  );
};

export default Login;
