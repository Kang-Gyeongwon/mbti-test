import React from 'react'
import { Button, Title } from '../../styles/styledComponents'

import { RESULT_CONTEMTS } from '../../constants'

const generateMBTI = (pointInfo) => {
  const {e, s, t, j} = pointInfo
  let result = "" 
    result += e > 0 ? "E" : "I"
    result += s > 0 ? "S" : "N"
    result += t > 0 ? "T" : "F"
    result += j > 0 ? "J" : "P"
  return result
}

const Result = ({ pointInfo, onResetTest, name }) => {
  const mbti = generateMBTI(pointInfo)
  const content = RESULT_CONTEMTS[mbti]
 
  return <div>
    <Title>
      <h2>{`${name}의 향수는`}</h2>
      <h3>{content.character}</h3>
      <img style={{width: 200, height:200}} src={content.imageSrc} />
      <h3>
        {content.charDescription}<br/>
        {content.subCharDescription}
      </h3>
      <p style={{width: 420}}>{content.instruction}</p>
    </Title>
    <Button onClick={onResetTest}>다시하기</Button>
  </div>
}

export default Result;