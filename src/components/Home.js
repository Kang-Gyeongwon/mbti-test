import React, { useState } from 'react'
import { Button, Title, Input } from '../styles/styledComponents'

const homeContainer = {
  textAlign:"center"
}

const Home = ({ onStartTest, begin }) => {
  const [name, setName] = useState("")
  
  const handleOpenAlert = () => {
    if(name === ""){
      alert("πμ΄λ¦μ μλ ₯νμΈμπ")
      begin(false)
    }
  }
  const handleName = e => {
    setName(e.target.value)
  }
  return <div style={homeContainer}>
    <Title>
      <h1>λΉμ μκ² μ΄μΈλ¦¬λ ν₯μλ?</h1>
      <Input type="text" placeholder="μ΄λ¦" value={name} onChange={handleName} />
    </Title>
    <Button onClick={() => {
      onStartTest(name)
      handleOpenAlert()
      }}>μμνκΈ°</Button>
    <Title><p style={{fontSize: 11}}>MADE BY GYEONGWON</p></Title>
  </div>
  }

export default Home;