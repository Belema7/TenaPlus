import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Send, 
  Bot, 
  User, 
  Clock,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Download,
  Share2,
  ArrowLeft,
  Brain,
  Heart,
  Pill,
  Activity,
  Menu
} from 'lucide-react'

const AiAssistant = () => {
  const navigate = useNavigate()
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your HealthMate AI assistant. I'm here to help you with medication questions, health advice, and your daily routine. What can I help you with today?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'welcome'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "Best time for medication?",
    "Explain my routine",
    "Medicine side effects?",
    "Improve sleep quality?"
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px'
    }
  }, [inputMessage])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage)
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    const responses = {
      medication: {
        text: "Based on your medication schedule, I recommend taking your medicine with meals to improve absorption. Always follow your doctor's specific instructions and never adjust dosage without consulting them.",
        type: 'medication_advice'
      },
      routine: {
        text: "Your daily routine is optimized for consistency. Try to maintain regular timings for medications, meals, and exercise. Consistency helps your body adapt and improves treatment effectiveness.",
        type: 'routine_advice'
      },
      side: {
        text: "Common side effects can include mild nausea or dizziness. If you experience severe symptoms like difficulty breathing or chest pain, seek immediate medical attention. Always report side effects to your doctor.",
        type: 'side_effects'
      },
      sleep: {
        text: "For better sleep quality, maintain a consistent sleep schedule, avoid caffeine before bedtime, and create a relaxing bedtime routine. Good sleep supports your recovery and overall health.",
        type: 'sleep_advice'
      },
      default: {
        text: "I understand you're asking about your health. As an AI assistant, I can provide general health information and help you understand your treatment plan. For specific medical advice, always consult your healthcare provider.",
        type: 'general'
      }
    }

    let responseType = 'default'
    
    if (lowerMessage.includes('medication') || lowerMessage.includes('medicine') || lowerMessage.includes('pill')) {
      responseType = 'medication'
    } else if (lowerMessage.includes('routine') || lowerMessage.includes('schedule') || lowerMessage.includes('daily')) {
      responseType = 'routine'
    } else if (lowerMessage.includes('side effect') || lowerMessage.includes('symptom')) {
      responseType = 'side'
    } else if (lowerMessage.includes('sleep') || lowerMessage.includes('rest')) {
      responseType = 'sleep'
    }

    return {
      id: Date.now() + 1,
      text: responses[responseType].text,
      sender: 'ai',
      timestamp: new Date(),
      type: responses[responseType].type
    }
  }

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
    textareaRef.current?.focus()
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const getMessageIcon = (type) => {
    const icons = {
      medication_advice: <Pill className="h-3 w-3 sm:h-4 sm:w-4" />,
      routine_advice: <Clock className="h-3 w-3 sm:h-4 sm:w-4" />,
      side_effects: <Activity className="h-3 w-3 sm:h-4 sm:w-4" />,
      sleep_advice: <Heart className="h-3 w-3 sm:h-4 sm:w-4" />,
      general: <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
    }
    return icons[type] || <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header - Mobile Optimized */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 transition-colors p-2 sm:p-0"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </button>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <Bot className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">HealthMate AI</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Your personal health assistant</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-1 sm:gap-2">
            <button className="p-1 sm:p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button className="p-1 sm:p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold">AI Health Assistant</h2>
                <p className="text-blue-100 text-xs sm:text-sm">Ready to help with your health questions</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-64 sm:h-80 lg:h-96 overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 sm:gap-3 lg:gap-4 ${
                  message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user'
                      ? 'bg-blue-600'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <User className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-white" />
                  ) : (
                    <Bot className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] lg:max-w-[70%] rounded-xl sm:rounded-2xl p-3 sm:p-4 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none sm:rounded-tr-none'
                      : 'bg-gray-100 text-gray-900 rounded-tl-none sm:rounded-tl-none'
                  }`}
                >
                  {/* Message Type Icon for AI */}
                  {message.sender === 'ai' && (
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <div className="text-blue-600">
                        {getMessageIcon(message.type)}
                      </div>
                      <span className="text-xs text-blue-600 font-medium uppercase tracking-wide hidden sm:inline">
                        {message.type.replace('_', ' ')}
                      </span>
                    </div>
                  )}

                  <p className="whitespace-pre-wrap text-sm sm:text-base">{message.text}</p>
                  
                  {/* Timestamp */}
                  <div
                    className={`text-xs mt-1 sm:mt-2 ${
                      message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>

                  {/* Feedback for AI messages */}
                  {message.sender === 'ai' && (
                    <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                      <span className="text-xs text-gray-500 hidden sm:inline">Was this helpful?</span>
                      <button className="p-1 text-gray-400 hover:text-green-500 transition-colors">
                        <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                        <ThumbsDown className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2 sm:gap-3 lg:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Bot className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-white" />
                </div>
                <div className="bg-gray-100 text-gray-900 rounded-xl sm:rounded-2xl rounded-tl-none p-3 sm:p-4 max-w-[85%] sm:max-w-[80%] lg:max-w-[70%]">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Quick questions:</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-2 py-1 sm:px-3 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm hover:bg-blue-100 transition-colors border border-blue-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
              <div className="flex-1">
                <textarea
                  ref={textareaRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about health, medications, or routine..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm sm:text-base"
                  rows="1"
                  maxLength="500"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base font-medium"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Send</span>
              </button>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-2 sm:mt-3 lg:mt-4 text-center">
              <p className="text-xs text-gray-500">
                💡 Remember: I'm an AI assistant. For medical emergencies, contact your doctor immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid - Mobile Stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Pill className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Medication Guidance</h3>
            <p className="text-xs sm:text-sm text-gray-600">Get information about your medications and timing</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Health Tips</h3>
            <p className="text-xs sm:text-sm text-gray-600">Personalized advice for your health condition</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Routine Support</h3>
            <p className="text-xs sm:text-sm text-gray-600">Help with your daily health routine and schedule</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiAssistant