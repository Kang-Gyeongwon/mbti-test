import React, { useState } from 'react'
import { Button, Title, Input } from '../styles/styledComponents'

const homeContainer = {
  textAlign:"center"
}

const Home = ({ onStartTest, begin }) => {
  const [name, setName] = useState("")
  
  const handleOpenAlert = () => {
    if(name === ""){
      alert("😃이름을 입력하세요😃")
      begin(false)
    }
  }
  const handleName = e => {
    setName(e.target.value)
  }
  return <div style={homeContainer}>
    <Title>
      <h1>당신에게 어울리는 향수는?</h1>
      <Input type="text" placeholder="이름" value={name} onChange={handleName} />
    </Title>
    <Button onClick={() => {
      onStartTest(name)
      handleOpenAlert()
      }}>시작하기</Button>
    <Title><p style={{fontSize: 11}}>MADE BY GYEONGWON</p></Title>
  </div>
  }

export default Home;