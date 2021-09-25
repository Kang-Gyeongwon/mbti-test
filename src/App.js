import React, { useState } from 'react'
import Home from './components/Home'
import Game from './components/Game'

const container = {
  height: '100vh',
  display: "flex", justifyContent: "center", 
  alignItems: "center"
}

const App = () => {
  const [name, setName] = useState("")
  const [begin, setBegin] = useState(false)
  
  const handleStartTest = name => { 
    setBegin(true) 
    setName(name)
  }
  const handleResetTest = () => { setBegin(false) }

  return <div style={container}>
    {begin ? <Game onResetTest={handleResetTest} name={name} /> : <Home onStartTest={handleStartTest} begin={setBegin} />}
  </div>
}

export default App