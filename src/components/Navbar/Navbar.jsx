import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Reusable class generators with health colors
  const navLinkClasses = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
    isActive
      ? 'border-emerald-500 text-emerald-800'
      : 'border-transparent text-emerald-700 hover:border-emerald-500 hover:text-emerald-800'
  }`;



  const mobileNavLinkClasses = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium rounded-md transition-colors ${isActive
      ? 'bg-emerald-500 text-white'
      : 'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800'
    }`;

  const authButtonClasses = ({ isActive }) =>
    `px-6 py-2 rounded-md text-sm font-medium border transition-all duration-200 ${isActive
      ? 'text-emerald-700 border-emerald-500 bg-emerald-50'
      : 'text-emerald-600 border-emerald-300 hover:text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50'
    }`;

  const signupButtonClasses = ({ isActive }) =>
    `px-6 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white border border-emerald-400 hover:from-emerald-600 hover:to-teal-600 shadow-md transition-all duration-200 ${isActive ? 'ring-2 ring-emerald-300 ring-opacity-60' : ''
    }`;

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    // { to: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="bg-linear-to-r from-emerald-50 to-teal-50 shadow-lg border-b border-emerald-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" onClick={closeMobileMenu} aria-label="Go to homepage">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-4">
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
            <div className="flex items-center space-x-4 ml-1">
              <NavLink
                to="/login"
                className={`${authButtonClasses} bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-lg transition-colors`}
              >
                Get Started
              </NavLink>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Smooth Animation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 bg-gradient-to-b from-emerald-50 to-teal-50 border-t border-emerald-200">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMobileMenu}
              className={mobileNavLinkClasses}
              end
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-4 space-y-3 border-t border-emerald-200 mt-4">
            <div className="flex items-center space-x-4 ml-1">
              <NavLink
                to="/login"
                className={`${authButtonClasses} bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-lg transition-colors`}
              >
                Get Started
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;