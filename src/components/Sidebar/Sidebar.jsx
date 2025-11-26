import React from "react";
import { NavLink } from "react-router-dom";
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
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/medicineinput", icon: Pill, label: "Medication" },
  { to: "/tasks", icon: ListChecks, label: "Daily Tasks" },
  { to: "/progress", icon: TrendingUp, label: "Progress" },
  { to: "/reminders", icon: Bell, label: "Reminders" },
  { to: "/aihelp", icon: MessageCircle, label: "AI Assistant" }
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-emerald-900 text-white p-6 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 mb-8 pb-5 border-b border-emerald-700">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <Heart className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-lg font-bold">HealthMate</h1>
            <p className="text-xs text-emerald-200">AI Assistant</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-emerald-700 shadow-md"
                    : "hover:bg-emerald-800 text-emerald-100"
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
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-white text-emerald-700 shadow-md"
                : "hover:bg-emerald-800 text-emerald-100"
            }`
          }
        >
          <Settings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </NavLink>

        <div className="mt-4 p-3 bg-emerald-800 rounded-lg flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-white">U</span>
          </div>
          <div>
            <div className="text-sm font-medium">User Name</div>
            <div className="text-xs text-emerald-200">Patient</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
