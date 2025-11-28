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
  Activity
} from 'lucide-react'

const AiAssistant = () => {
  const navigate = useNavigate()
  const messagesEndRef = useRef(null)
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
    "What's the best time to take my medication?",
    "Can you explain my daily routine?",
    "What are the side effects of my medicine?",
    "How can I improve my sleep quality?"
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      medication_advice: <Pill className="h-4 w-4" />,
      routine_advice: <Clock className="h-4 w-4" />,
      side_effects: <Activity className="h-4 w-4" />,
      sleep_advice: <Heart className="h-4 w-4" />,
      general: <Brain className="h-4 w-4" />
    }
    return icons[type] || <Brain className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Dashboard
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HealthMate AI</h1>
                <p className="text-gray-600">Your personal health assistant</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Download className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">AI Health Assistant</h2>
                <p className="text-blue-100 text-sm">Ready to help with your health questions</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${
                  message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user'
                      ? 'bg-blue-600'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[70%] rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-900 rounded-tl-none'
                  }`}
                >
                  {/* Message Type Icon for AI */}
                  {message.sender === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-blue-600">
                        {getMessageIcon(message.type)}
                      </div>
                      <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                        {message.type.replace('_', ' ')}
                      </span>
                    </div>
                  )}

                  <p className="whitespace-pre-wrap">{message.text}</p>
                  
                  {/* Timestamp */}
                  <div
                    className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>

                  {/* Feedback for AI messages */}
                  {message.sender === 'ai' && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                      <span className="text-xs text-gray-500">Was this helpful?</span>
                      <button className="p-1 text-gray-400 hover:text-green-500 transition-colors">
                        <ThumbsUp className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                        <ThumbsDown className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-tl-none p-4 max-w-[70%]">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
            <div className="px-6 pb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Quick questions you can ask:</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-2 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors border border-blue-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about your health, medications, or daily routine..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  rows="2"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="self-end px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send
              </button>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                💡 Remember: I'm an AI assistant. For medical emergencies, contact your doctor immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Pill className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Medication Guidance</h3>
            <p className="text-sm text-gray-600">Get information about your medications and timing</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Health Tips</h3>
            <p className="text-sm text-gray-600">Personalized advice for your health condition</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Routine Support</h3>
            <p className="text-sm text-gray-600">Help with your daily health routine and schedule</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiAssistant