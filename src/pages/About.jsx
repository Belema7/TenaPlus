import React from 'react'
import LayOut from '../components/LayOut/LayOut'
import { 
  Heart, 
  Target, 
  Brain, 
  Smartphone, 
  Users, 
  Shield,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Calendar,
  Bell,
  Activity
} from 'lucide-react'

const About = () => {
  return (
    <LayOut>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TenaPlus</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Revolutionizing post-hospital care through AI-powered health assistance and personalized recovery support.
            </p>
          </div>
        </section>

        {/* About TenaPlus */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is TenaPlus?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                TenaPlus is an innovative AI health assistant designed to support patients in their recovery journey 
                after hospital visits. We combine cutting-edge artificial intelligence with compassionate care to 
                provide personalized health management solutions that adapt to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower individuals in their health recovery by providing intelligent, personalized, 
                and accessible tools that bridge the gap between hospital care and home recovery. We believe 
                that everyone deserves continuous support on their journey to better health.
              </p>
            </div>
          </div>
        </section>

        {/* How Our AI Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-cyan-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our AI Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our intelligent system analyzes your health information to create personalized care plans
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Health Input",
                  description: "Share your condition and medication details",
                  icon: Stethoscope,
                  color: "emerald"
                },
                {
                  step: "2",
                  title: "AI Analysis",
                  description: "Our AI processes your information securely",
                  icon: Brain,
                  color: "teal"
                },
                {
                  step: "3",
                  title: "Personalized Plan",
                  description: "Receive tailored daily routines and reminders",
                  icon: Calendar,
                  color: "cyan"
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description: "Get continuous motivation and progress tracking",
                  icon: Activity,
                  color: "blue"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                  </div>
                  <div className={`w-8 h-8 bg-${item.color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Platform */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The TenaPlus Platform</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our platform is built with cutting-edge technology to ensure seamless health management. 
                  From intuitive interfaces to secure data handling, every aspect is designed with your 
                  wellbeing in mind.
                </p>
                <div className="space-y-4">
                  {[
                    "Secure cloud-based health data storage",
                    "Real-time AI-powered recommendations",
                    "Cross-device synchronization",
                    "24/7 health monitoring support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Platform Illustration */}
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-white text-center space-y-4">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <Smartphone className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold">TenaPlus Platform</h3>
                  <p className="opacity-90">Accessible. Secure. Intelligent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes TenaPlus Different</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy Input",
                  description: "Simple medication and condition entry with photo upload support",
                  icon: Smartphone,
                  color: "emerald"
                },
                {
                  title: "Personalized Plans",
                  description: "AI-generated routines specifically tailored to your health needs",
                  icon: Heart,
                  color: "teal"
                },
                {
                  title: "Ongoing Support",
                  description: "Continuous motivation and progress tracking throughout your journey",
                  icon: Shield,
                  color: "cyan"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Important Notice</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TenaPlus is designed to assist with health management and recovery support, 
                <span className="font-semibold text-amber-700"> not to substitute professional medical care</span>. 
                Always consult with your healthcare provider for medical advice, diagnosis, or treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-200">
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition-colors duration-200">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayOut>
  )
}

export default About