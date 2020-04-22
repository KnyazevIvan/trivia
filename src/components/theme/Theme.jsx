import React, { useState, useEffect } from 'react'
import { Markup } from 'interweave'
import styled from 'styled-components/macro'
import { Answer } from './Answer'

export const Theme = (props) => {

  const [toggle, settoggle] = useState(false)
  const [showTrueAnswer, setshowTrueAnswer] = useState(false)

  useEffect(() => {
    if(props.page===0){
      settoggle(true)
    }
    setTimeout(() => {
      settoggle(true)
    }, 100);
    
  }, [props.page])
  
  console.log(props.trivieState)




  return (



    <div className='container'>
    


        <Title  opacity={toggle?1:0}><Markup content={props.trivieState.question} /></Title>



        <Answer true={true} setshowTrueAnswer={setshowTrueAnswer} showTrueAnswer={showTrueAnswer} text= {props.trivieState.correct_answer} toggle={toggle} counter={props.counter} settoggle={settoggle} ></Answer>

        {props.trivieState.incorrect_answers.map(el=><Answer setshowTrueAnswer={setshowTrueAnswer} true={false} text= {el} toggle={toggle} counter={props.counter} settoggle={settoggle}/>)}
        

       
    
    </div>

  )
}


const Title = styled.div`

  font-size:30px;
  margin-top:50px;
  margin-bottom:20px;
  opacity: ${props=>props.opacity};
  transition: opacity 0ms ease 900ms;


`