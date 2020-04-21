import React, { useEffect } from 'react'

export const Results = (props) => {
  useEffect(() => {
    
   
      props.cleanTrivia()
    
  }, [])

  return (
    <div className='container'>
      <h1>{props.rightAnswerCouner}/5</h1>
    </div>
  )
}
