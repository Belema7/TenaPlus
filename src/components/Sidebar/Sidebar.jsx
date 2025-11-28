import React, { useState, useEffect } from "react";
import logo from '../../assets/images/logo.jpg'
import { NavLink, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Pill,
    ListChecks,
    TrendingUp,
    Bell,
    MessageCircle,
    Settings,
    Heart,
    Menu,
    X
} from "lucide-react";

const navItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", end: true },
    { to: "/dashboard/medicineinput", icon: Pill, label: "Medication" },
    { to: "/dashboard/tasks", icon: ListChecks, label: "Daily Tasks" },
    { to: "/dashboard/progress", icon: TrendingUp, label: "Progress" },
    { to: "/dashboard/reminders", icon: Bell, label: "Reminders" },
    { to: "/dashboard/aihelp", icon: MessageCircle, label: "AI Assistant" }
];

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    // Close sidebar when route changes on mobile
    useEffect(() => {
        if (window.innerWidth < 1024 && isOpen) {
            onClose();
        }
    }, [location.pathname, isOpen, onClose]);

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`
                w-64 h-screen bg-emerald-900 text-white p-6 flex flex-col justify-between fixed left-0 top-0 z-50
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Logo and Close Button */}
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-emerald-700">
                    <div className="flex items-center gap-3">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                            <img
                                src={logo}
                                alt="TenaPlus Logo"
                                className="object-cover w-full h-full rounded-full"
                            />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">TenaPlus</h1>
                            <p className="text-xs text-emerald-200">AI Assistant</p>
                        </div>
                    </div>
                    
                    {/* Close Button - Mobile Only */}
                    <button 
                        onClick={onClose}
                        className="lg:hidden p-2 text-emerald-200 hover:text-white hover:bg-emerald-800 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1">
                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                onClick={() => {
                                    // Close sidebar on mobile when link is clicked
                                    if (window.innerWidth < 1024) {
                                        onClose();
                                    }
                                }}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                                        isActive
                                            ? "bg-white text-emerald-700 shadow-lg transform scale-[1.02]"
                                            : "hover:bg-emerald-800 text-emerald-100 hover:transform hover:scale-[1.02]"
                                    }`
                                }
                            >
                                <item.icon size={20} />
                                <span className="text-sm font-medium">{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Bottom section */}
                <div>
                    <NavLink
                        to="/dashboard/settings"
                        onClick={() => {
                            if (window.innerWidth < 1024) {
                                onClose();
                            }
                        }}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? "bg-white text-emerald-700 shadow-lg"
                                    : "hover:bg-emerald-800 text-emerald-100"
                            }`
                        }
                    >
                        <Settings size={20} />
                        <span className="text-sm font-medium">Settings</span>
                    </NavLink>

                    <div className="mt-4 p-3 bg-emerald-800 rounded-lg flex items-center gap-3 hover:bg-emerald-700 transition-colors cursor-pointer">
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-white">U</span>
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-medium">User Name</div>
                            <div className="text-xs text-emerald-200">Patient</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;