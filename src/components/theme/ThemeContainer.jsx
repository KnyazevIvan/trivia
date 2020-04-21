import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Theme } from './Theme'
import {Results} from './Result'
import {fetchTrivia,cleanTrivia,nextPage,cleanPage} from '../../reducer/appReducer'
import { Preloader } from './Preloader'

const ThemeContainer = ({match,...props}) => {

  const [result, setresult] = useState(false)
  const [rightAnswerCouner, setrightAnswerCouner] = useState(0)


  useEffect(() => {
    
    props.fetchTrivia(match.params.id)
    return ()=>{
      props.cleanTrivia()
      props.cleanPage()
    }
  }, [])



let counter = (answer) => {
  answer&&setrightAnswerCouner(e=>e+1)

  if(props.page<4){
    setTimeout(() => {
      props.nextPage()
    }, 500);
 

  }
  if (props.page===4){
    setresult(true)
  }
} 
if (result){
  return <Results  cleanTrivia={props.cleanTrivia} rightAnswerCouner={rightAnswerCouner}/>
}

if (props.trivieState.length){
  return  <Theme  page={props.page} counter={counter} trivieState={props.trivieState[props.page]}/>
}
else {


  return <Preloader/>
   
 
 
}
}
const mapStateToProps = state => {
  return {
    trivieState:state.app.trivieState,
    page:state.app.page
  }
}


const mapDispatchToProps ={
  fetchTrivia,
  cleanTrivia,
  nextPage,
  cleanPage
}

export default connect(mapStateToProps,mapDispatchToProps)(ThemeContainer)
