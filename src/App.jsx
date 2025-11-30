import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './routing/Routing'
import { useEffect } from 'react'
import { auth } from './Utility/firebase'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './Utility/action.type'

const App = () => {
  const context = useContext(DataContext)
  
  if (!context) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading HealthPlus...</p>
        </div>
      </div>
    )
  }

  const [state, dispatch] = context

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Routing />
      </div>
    </Router>
  )
}

export default App