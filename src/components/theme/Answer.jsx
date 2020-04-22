import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export const Answer = (props) => {
  const [showTrueAnswer, setshowTrueAnswer] = useState(false)

useEffect(() => {
  setshowTrueAnswer(false)
}, [props.text])



  return (
    <AnswerStyle onClick={()=> {props.counter(props.true);props.settoggle(false);setshowTrueAnswer(true)}} background={(showTrueAnswer&props.true)?'green':(showTrueAnswer&props.true===false)?'red':'white'}  opacity={`${props.toggle?1:0}`}  style={{ order: Math.floor(Math.random() * Math.floor(10)) }}>
      {props.text}
    </AnswerStyle>
  )
}



const AnswerStyle = styled.div`
cursor: pointer;
  user-select:none;
  margin-top:10px;
  margin-bottom:10px;
  padding:8px;
  border: 1px solid silver;
  border-radius:5px;
  background-color:${props=>props.background};
  opacity: ${props=>props.opacity};
  transition: background-color 500ms;
  transition: opacity 0ms ease 900ms;
 

    &:hover{
      box-shadow: 0 0 5px;
   
    }
`