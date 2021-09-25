import styled from 'styled-components'

export const Button = styled.button`
  width: 160px; height: 40px;
  font-size: 16px;
  border-radius: 20px; border: none;
  color: white;
  background-color: #CBB8EE;
  margin: 20px; 
  &:active{
    outline: none;
  }
  &:focus{
    outline: none;
  }
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'IBMPlexSansKR-Regular';
`
export const BtnQuestion = styled.button`
  font-size: 17px;
  width: 290px; height: 55px;
  border-radius: 19px; border: none;
  padding: 10px 9px;
  margin-bottom: 5px;
  background-color: #AD9AEE; color: white;
  @font-face {
    font-family: 'Cafe24Oneprettynight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Cafe24Oneprettynight'; 
`
export const Input = styled.input`
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'RIDIBatang';
  display: inline-block;
  border-radius: 5px; border: 1px solid darkgray;
  margin-top: 60px; box-sizing: border-box;
  padding: 0 5px;
  width: 150px; height: 30px; 
`

export const Title = styled.div`
  min-height: 150px;
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'RIDIBatang';
`