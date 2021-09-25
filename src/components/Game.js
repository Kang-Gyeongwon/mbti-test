import React, { useState } from 'react'
import Question from './game/Question'
import Result from './game/Result'

const NUMBER_OF_QUESTION = 12; 
const gameContainer = { textAlign: 'center' }

const Game = ({ onResetTest, name }) => {
  const [pointInfo, setPointInfo] = useState({
    count: 0,
    e: 0, s:0, t: 0, j: 0
  })
  
  const handleSelectAnswer = (btnNum, type) => {
    if(btnNum === 1){
      if (type === 'e'){ setPointInfo({...pointInfo, e: pointInfo.e +1, count: pointInfo.count + 1}) }
      if (type === 's'){ setPointInfo({...pointInfo, s: pointInfo.s +1, count: pointInfo.count + 1}) }
      if (type === 't'){ setPointInfo({...pointInfo, t: pointInfo.t +1, count: pointInfo.count + 1}) }
      if (type === 'j'){ setPointInfo({...pointInfo, j: pointInfo.j +1, count: pointInfo.count + 1}) }
    }else{
      if (type === 'e'){ setPointInfo({...pointInfo, e: pointInfo.e - 1, count: pointInfo.count + 1}) }
      if (type === 's'){ setPointInfo({...pointInfo, s: pointInfo.s - 1, count: pointInfo.count + 1}) }
      if (type === 't'){ setPointInfo({...pointInfo, t: pointInfo.t - 1, count: pointInfo.count + 1}) }
      if (type === 'j'){ setPointInfo({...pointInfo, j: pointInfo.j - 1, count: pointInfo.count + 1}) }
    }
  }

  const { count } = pointInfo
  return <div style={gameContainer}>
    {count === NUMBER_OF_QUESTION ?
      <Result onResetTest={onResetTest} pointInfo={pointInfo} name={name} /> : 
      <Question count={count} onSelectAnswer={handleSelectAnswer} />
    }
  </div>
}

export default Game;