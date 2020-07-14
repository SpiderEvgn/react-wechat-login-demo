import React, { useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'stylesheets/application.scss'
import AppLayout from 'pages/AppLayout'
import { AppContext, reducer, initState } from 'context-manager' // 状态步骤穿透 1

function App() {
  const [state, dispatch] = useReducer(reducer, initState)  // 状态步骤穿透 2

  // 状态步骤穿透 3   -> value=...
  return (
    <AppContext.Provider value={{state, dispatch}}>  
      <Router>
        <AppLayout />          
      </Router>
    </AppContext.Provider>
  )
}

export default App