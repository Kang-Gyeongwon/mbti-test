import React from 'react'
import { BtnQuestion, Title } from '../../styles/styledComponents'

import { questionContent } from '../../utils/questionContent'

const Question = ({ count, onSelectAnswer }) =>{
  return <div>
    <Title>
      <h3>{count + 1}</h3>
      <h2 style={{width: 430}}>{questionContent[count].question}</h2>
    </Title>
    <BtnQuestion onClick={() => onSelectAnswer(1, questionContent[count].type)}>
      {questionContent[count].answer1}
    </BtnQuestion><br />
    <BtnQuestion onClick={() => onSelectAnswer(2, questionContent[count].type)}>
      {questionContent[count].answer2}
    </BtnQuestion>
    </div>
}

export default Question;