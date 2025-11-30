import { NavLink, Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import moment from 'moment';
import { Home, Info, Calendar, User, ChevronDown, Menu } from 'lucide-react';
import { DataContext } from '../../components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
import { auth } from '../../Utility/firebase';
import { signOut } from 'firebase/auth';

const DashboardHeader = () => {
  const today = moment().format('dddd');
  const date = moment().format('MMM D, YYYY');

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: Type.SET_USER, user: null });
      navigate('/');
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          {/* Left: Greeting + Date */}
          <div className="flex items-center gap-5">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Hello, {user ? user.email.split('@')[0] : 'Guest'}
              </h1>
              <p className="text-sm text-gray-400 mt-0.5">Welcome back!</p>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-gray-300">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="font-medium text-white">{today}</span>
                <span className="text-gray-500 mx-2">•</span>
                <span className="text-sm">{date}</span>
              </div>
            </div>
          </div>

          {/* Right: Navigation + Profile */}
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-gray-800/60 rounded-full px-2 py-1.5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`
                }
              >
                <Home className="w-4 h-4" />
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`
                }
              >
                <Info className="w-4 h-4" />
                About
              </NavLink>
            </nav>

            {/* User Profile / Auth */}
            {user ? (
              <div className="relative flex items-center gap-3 bg-gray-800/70 rounded-xl px-4 py-3 hover:bg-gray-800 transition cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-white">{user.email.split('@')[0]}</p>
                  <p className="text-xs text-emerald-300">Patient</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="ml-2 text-xs text-gray-200 hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-2 bg-gray-800/70 rounded-xl px-4 py-3 hover:bg-gray-800 transition cursor-pointer"
              >
                <User className="w-6 h-6 text-white" />
                <span className="hidden sm:block text-sm text-gray-300 font-medium">
                  Sign In / Sign Up
                </span>
                <ChevronDown className="w-4 h-4 text-gray-300" />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-700 rounded-sm"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Date */}
        <div className="sm:hidden flex items-center gap-3 text-gray-400 text-sm mt-2">
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span>{today}, {date}</span>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-3">
          <NavLink to="/" className="block py-2 px-3 rounded hover:bg-gray-700">
            Home
          </NavLink>
          <NavLink to="/about" className="block py-2 px-3 rounded hover:bg-gray-700">
            About
          </NavLink>
          {user ? (
            <div className="py-2 border-t border-gray-600">
              <p className="text-sm text-gray-300">{user.email}</p>
              <button
                onClick={handleSignOut}
                className="font-bold text-sm mt-1 text-gray-200 hover:text-white"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/auth" className="block py-2 px-3 rounded hover:bg-gray-700">
              Sign In / Sign Up
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
