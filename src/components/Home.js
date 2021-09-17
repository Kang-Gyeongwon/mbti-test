/* 
  시작 화면, 사용자에게 시작을 유도하고
  퀴즈에 대해 소개하는 화면
*/
import React from 'react'
import { Button, Title, Input } from '../styles/styledComponents'

const homeContainer = {
  textAlign:"center"
}

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div style={homeContainer}>
      <Title>
        <h1>당신에게 어울리는 향수는?</h1>
        <Input type="text" placeholder="이름"/>
      </Title>
      <Button onClick={this.props.goTest}>시작하기</Button>
      <Title><p style={{fontSize: 11}}>MADE BY GYEONGWON</p></Title>
    </div>
  }
}

export default Home;