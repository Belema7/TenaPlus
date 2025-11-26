import React from 'react'
import LayOut from '../components/LayOut/LayOut'
import Footer from '../components/Footer/Footer'
import logo from '../assets/images/logo.jpg'
import {
  Heart,
  Calendar,
  Bell,
  Activity,
  Stethoscope,
  ArrowRight,
  PlayCircle,
  CheckCircle2
} from 'lucide-react'

const Home = () => {
  return (
    <LayOut>
      <div className="min-h-screen">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
               

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Take Control of Your{' '}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Health Journey
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Get personalized daily routines, smart medication reminders, and AI-powered health guidance
                    to support your recovery and maintain your wellbeing.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Try It Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-semibold rounded-xl transition-all duration-200">
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content - Hero Image/Illustration */}

<div className="flex items-center justify-center w-full">
  <img
    src={logo}
    alt="TenaPlus"
    className="w-100 object-contain"
  />
</div>



            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple steps to transform your health management with AI-powered assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Share Your Health Info",
                  description: "Tell us about your condition and medications",
                  icon: Stethoscope,
                  color: "emerald"
                },
                {
                  step: "2",
                  title: "Ai Analysis",
                  description: "Our Ai creates a personalized details",
                  icon: Heart,
                  color: "teal"
                },
                {
                  step: "3",
                  title: "Get Remainders",
                  description: "Complete tasks with smart reminders",
                  icon: Calendar,
                  color: "cyan"
                },
                {
                  step: "4",
                  title: "Track Progress",
                  description: "Monitor your health journey and improvements",
                  icon: Activity,
                  color: "blue"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`relative mb-6 mx-auto w-20 h-20 bg-${item.color}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${item.color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                      {item.step}
                    </div>
                    <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}

<section className="py-20 lg:py-28 bg-gradient-to-br from-teal-50 to-emerald-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Everything You Need to Stay Healthy
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Comprehensive, AI-powered tools designed for real recovery and long-term wellness.
      </p>
    </div>

    {/* Features Grid - 4 balanced cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Card 1 */}
      <div className="group bg-white rounded-2xl p-7 shadow-md border border-emerald-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Calendar className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Daily Routine</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI-crafted schedules with medication, exercise, meals, and rest — perfectly timed for you.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {['Custom exercise plans', 'Smart medication timing', 'Diet suggestions', 'Optimal rest alerts'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-2xl p-7 shadow-md border border-teal-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Bell className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Medication Reminders</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Never miss a dose with adaptive, context-aware alerts and refill notifications.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {['Timely alerts', 'Drug info & interactions', 'Side effect tracking', 'Auto refill reminders'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-teal-700">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-2xl p-7 shadow-md border border-emerald-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Heart className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Motivational Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay encouraged with daily positive messages and milestone celebrations.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {['Daily encouragement', 'Progress celebrations', 'Mood-based support', 'Streak tracking'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group bg-white rounded-2xl p-7 shadow-md border border-teal-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify

-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Activity className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              See your improvement with beautiful charts, trends, and achievement badges.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {['Health metrics dashboard', 'Visual progress charts', 'Trend analysis', 'Milestone rewards'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-teal-700">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Compact CTA */}
    <div className="mt-20 text-center">
      <div className="inline-block bg-white rounded-2xl px-10 py-8 shadow-xl border border-cyan-100">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Ready to Transform Your Health?
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Join thousands already managing their health better — with AI that truly cares.
        </p>
        <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          Get Started Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</section>


        {/* Footer */}
        <Footer />
      </div>
    </LayOut>
  )
}

export default Home