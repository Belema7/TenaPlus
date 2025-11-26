import React from 'react'
import LayOut from '../components/LayOut/LayOut'
import Footer from '../components/Footer/Footer'
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
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit shadow-sm border border-emerald-100">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-emerald-700">Your AI Health Companion</span>
                </div>

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
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center space-y-4">
                    <Heart className="h-20 w-20 mx-auto opacity-90" />
                    <h3 className="text-2xl font-bold">HealthMate AI</h3>
                    <p className="opacity-90">Your personal health assistant</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-emerald-100">
                  <Bell className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-emerald-100">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
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
                  title: "Get AI Health Plan", 
                  description: "Receive personalized daily routines and advice",
                  icon: Heart,
                  color: "teal"
                },
                { 
                  step: "3", 
                  title: "Follow Your Schedule", 
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
        <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Stay Healthy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive health management tools powered by artificial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Feature */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Personalized Daily Routine
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      AI-generated schedules tailored to your specific health condition, 
                      including medication times, exercises, meals, and rest periods.
                    </p>
                    <ul className="space-y-2">
                      {['Customized exercise plans', 'Medication scheduling', 'Diet recommendations', 'Rest period optimization'].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-emerald-700">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Feature */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Smart Medication Reminders
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Never miss a dose with intelligent alarms and notifications that 
                      adapt to your daily routine and provide helpful context.
                    </p>
                    <ul className="space-y-2">
                      {['Timely dose alerts', 'Medication information', 'Side effect monitoring', 'Refill reminders'].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-teal-700">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Health Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of users who have transformed their health management with AI assistance.
                </p>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 ml-2" />
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