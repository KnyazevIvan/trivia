import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Header_wrapper = styled.div`
background-color: #20232a;
width: 100%;

`
const Header_content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  height: 60px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items:center;

`


export const Header = () => {
  const page = useSelector(state => state.app.page)
  const trivieState = useSelector(state => state.app.trivieState)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (trivieState.length)


      setCount(0)
    let id = setInterval(() => {
      if (trivieState.length)
        setCount(count => count + 1);

    }, 1000);

    return () => clearInterval(id);
  }, [page, trivieState]);

  let min = Math.floor(count / 60)
  let sec = count - (min * 60)
  let secTen = Math.floor(sec / 10)
  let secMinusTen = sec - (secTen * 10)
  let minTen = Math.floor(min / 10)
  let minMinusTen = min - (minTen * 10)
 

  return (

    <Header_wrapper>
      <Header_content>
        <NavLink to='/'> <div>Menu</div> </NavLink>

        <div style={{ display: trivieState.length ? 'block' : 'none' }}><span >{minTen}{minMinusTen}  : </span> {secTen}{secMinusTen}</div>

      </Header_content>

    </Header_wrapper>
  )
}
