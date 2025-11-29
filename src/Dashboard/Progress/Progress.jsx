// src/pages/Dashboard/Progress/Progress.jsx
import React from 'react';
import { TrendingUp, Target, Award, Activity, Calendar, Flame } from 'lucide-react';

const Progress = () => {
  // Mock data – replace with real API data later
  const weeklyData = [
    { day: 'Mon', tasks: 18, adherence: 95 },
    { day: 'Tue', tasks: 20, adherence: 100 },
    { day: 'Wed', tasks: 15, adherence: 80 },
    { day: 'Thu', tasks: 22, adherence: 98 },
    { day: 'Fri', tasks: 19, adherence: 92 },
    { day: 'Sat', tasks: 17, adherence: 88 },
    { day: 'Sun', tasks: 21, adherence: 100 },
  ];

  const milestones = [
    { title: '7-Day Streak', achieved: true, icon: Flame },
    { title: '100 Tasks Completed', achieved: true, icon: Target },
    { title: '30-Day Streak', achieved: false, icon: Award },
    { title: '95%+ Adherence for a Month', achieved: false, icon: Activity },
  ];

  const overallStats = {
    totalTasks: 132,
    avgAdherence: 93,
    currentStreak: 12,
    bestStreak: 28,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
                Your Progress
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Track your health journey and celebrate every milestone
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-emerald-600">{overallStats.currentStreak}</div>
              <div className="text-sm text-gray-500">Day Streak</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        {/* Overall Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{overallStats.totalTasks}</h3>
            <p className="text-gray-600 text-sm mt-1">Total Tasks Completed</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Activity className="h-7 w-7 text-green-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{overallStats.avgAdherence}%</h3>
            <p className="text-gray-600 text-sm mt-1">Average Adherence</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Flame className="h-7 w-7 text-orange-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{overallStats.currentStreak}</h3>
            <p className="text-gray-600 text-sm mt-1">Current Streak</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="h-7 w-7 text-purple-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{overallStats.bestStreak}</h3>
            <p className="text-gray-600 text-sm mt-1">Best Streak Ever</p>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            This Week's Activity
          </h2>
          <div className="grid grid-cols-7 gap-4">
            {weeklyData.map((day) => (
              <div key={day.day} className="text-center">
                <div className="text-sm font-medium text-gray-700 mb-2">{day.day}</div>
                <div className="space-y-3">
                  {/* Tasks Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-16 overflow-hidden">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 h-full flex items-end justify-center pb-1"
                        style={{ height: `${(day.tasks / 25) * 100}%` }}
                      >
                        <span className="text-xs font-bold text-white">{day.tasks}</span>
                      </div>
                    </div>
                  </div>
                  {/* Adherence Badge */}
                  <div
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      day.adherence >= 95
                        ? 'bg-emerald-100 text-emerald-700'
                        : day.adherence >= 80
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {day.adherence}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Milestones & Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all ${
                    milestone.achieved
                      ? 'border-emerald-300 bg-emerald-50'
                      : 'border-gray-200 bg-gray-50 opacity-70'
                  }`}
                >
                  <div
                    className={`p-4 rounded-full ${
                      milestone.achieved ? 'bg-emerald-600' : 'bg-gray-400'
                    }`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                    <p className="text-sm text-gray-600">
                      {milestone.achieved ? 'Unlocked!' : 'Keep going!'}
                    </p>
                  </div>
                  {milestone.achieved && (
                    <div className="ml-auto">
                      <Award className="h-8 w-8 text-emerald-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivational Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 px-8 py-5 rounded-2xl">
            <Flame className="h-8 w-8 animate-pulse" />
            <p className="text-lg font-semibold">
              You're doing amazing! Keep that streak alive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;