import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
    
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Reusable class generators
  const navLinkClasses = ({ isActive }) =>
    `px-1 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-white border-b-2 border-blue-500'
        : 'text-gray-300 hover:text-white'
    }`;

  const mobileNavLinkClasses =
    'block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 rounded-md transition-colors';

  const authButtonClasses = ({ isActive }) =>
    `px-6 py-2 rounded-md text-sm font-medium border transition-all duration-200 ${
      isActive
        ? 'text-white border-blue-500 bg-blue-500/10'
        : 'text-gray-300 border-gray-600 hover:text-white hover:border-gray-400'
    }`;

  const signupButtonClasses = ({ isActive }) =>
    `px-6 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 hover:from-blue-700 hover:to-blue-800 shadow-md transition-all duration-200 ${
      isActive ? 'ring-2 ring-blue-400 ring-opacity-60' : ''
    }`;

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="bg-black shadow-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMobileMenu} aria-label="Go to homepage">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navLinkClasses}
                  end // ensures exact match for "/" route
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-4 ml-10">
              <NavLink to="/login" className={authButtonClasses}>
                Login
              </NavLink>
              <NavLink to="/signup" className={signupButtonClasses}>
                Sign Up
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Smooth Animation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 bg-black border-t border-gray-800">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `${mobileNavLinkClasses} ${isActive ? 'text-white bg-gray-900' : ''}`
              }
              end
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-4 space-y-3 border-t border-gray-800 mt-4">
            <NavLink
              to="/login"
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 rounded-md text-center border border-gray-700"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-base font-medium text-white text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-md border border-blue-500 hover:from-blue-700 hover:to-blue-800 shadow-md transition-all"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;