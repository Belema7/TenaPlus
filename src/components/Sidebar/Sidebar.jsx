import React from "react";
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
    Heart
} from "lucide-react";

const navItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", end: true },
    { to: "/dashboard/medicineinput", icon: Pill, label: "Medication" },
    { to: "/dashboard/tasks", icon: ListChecks, label: "Daily Tasks" },
    { to: "/dashboard/progress", icon: TrendingUp, label: "Progress" },
    { to: "/dashboard/reminders", icon: Bell, label: "Reminders" },
    { to: "/dashboard/aihelp", icon: MessageCircle, label: "AI Assistant" }
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="w-64 h-screen bg-emerald-900 text-white p-6 flex flex-col justify-between fixed left-0 top-0 z-50">
            {/* Logo */}
            <div>
                <div className="flex items-center gap-3 mb-8 pb-5 border-b border-emerald-700">
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

                {/* Navigation */}
                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end} // This ensures exact matching for dashboard
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
    );
};

export default Sidebar;