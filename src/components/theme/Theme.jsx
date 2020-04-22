import React, { useState, useEffect } from 'react'
import { Markup } from 'interweave'
import styled, { css } from 'styled-components'

export const Theme = (props) => {

  const [toggle, settoggle] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      settoggle(true)
    }, 100);
    
  }, [props.page])
  
  console.log(props.trivieState)




  return (



    <div className='container'>
    


        <Title  opacity={`${toggle?1:0}`}><Markup content={props.trivieState.question} /></Title>



        <Answer opacity={`${toggle?1:0}`} toggle style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(true);settoggle(false)} }> {props.trivieState.correct_answer}</Answer>
        <Answer opacity={`${toggle?1:0}`}  style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(false);settoggle(false)} } >  {props.trivieState.incorrect_answers[0]}</Answer>
        <Answer opacity={`${toggle?1:0}`}  style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(false);settoggle(false)} }>  {props.trivieState.incorrect_answers[1]}</Answer>
        <Answer opacity={`${toggle?1:0}`}  style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(false);settoggle(false)} }>  {props.trivieState.incorrect_answers[2]}</Answer>

    
    </div>

  )
}


const Answer = styled.div`
cursor: pointer;
  user-select:none;
  margin-top:10px;
  margin-bottom:10px;
  padding:8px;
  border: 1px solid silver;
  border-radius:5px;
  opacity: ${props=>props.opacity};
  transition: background-color 500ms, opacity 500ms;


    &:hover{
      box-shadow: 0 0 5px;
      background-color:silver;
      color:white;
    }
`
const Title = styled.div`

  font-size:30px;
  margin-top:50px;
  margin-bottom:20px;
  opacity: ${props=>props.opacity};
  transition: opacity 500ms;


`