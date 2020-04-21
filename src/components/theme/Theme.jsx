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
      <AnswersStyle>


        <div className={`title ${toggle&&'active'}`}><Markup content={props.trivieState.question} /></div>



        <div className={`answers ${toggle&&'active'}`} style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(true);settoggle(false)} }> {props.trivieState.correct_answer}</div>
        <div className={`answers ${toggle&&'active'}`} style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(false);settoggle(false)} } >  {props.trivieState.incorrect_answers[0]}</div>
        <div className={`answers ${toggle&&'active'}`} style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(false);settoggle(false)} }>  {props.trivieState.incorrect_answers[1]}</div>
        <div className={`answers ${toggle&&'active'}`} style={{ order: Math.floor(Math.random() * Math.floor(10)) }} onClick={() =>{props.counter(false);settoggle(false)} }>  {props.trivieState.incorrect_answers[2]}</div>

      </AnswersStyle>
    </div>

  )
}



const AnswersStyle = styled.div`
.title{
  font-size:30px;
  margin-top:50px;
  margin-bottom:20px;
  opacity:0;
  transition: opacity 500ms;
}
.answers{
  cursor: pointer;
  user-select:none;
  margin-top:10px;
  margin-bottom:10px;
  padding:8px;
  border: 1px solid silver;
  border-radius:5px;
  opacity:0;
  transition: background-color 500ms, opacity 500ms;


    &:hover{
      box-shadow: 0 0 5px;
      background-color:silver;
      color:white;
    }
}
.active{
  opacity:1;
}

`