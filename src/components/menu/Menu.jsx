import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const Menu_style = styled.div`
margin-top:50px;
a{
  text-decoration: none;
  color: black;
}
`

export const Menu = () => {
  return (
    <Menu_style className='menu'>

      <div className='container'>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Choose the Theme</h2>
        <ListGroup>
          <NavLink to='/theme/games' style={{marginBottom:'20px',cursor:'pointer'}} className='block'><ListGroup.Item>Games</ListGroup.Item></NavLink>
          <NavLink to='/theme/televishion' style={{marginBottom:'20px',cursor:'pointer'}}>    <ListGroup.Item>Televishion</ListGroup.Item></NavLink>
          <NavLink to='/theme/films' style={{marginBottom:'20px',cursor:'pointer'}} className='block'><ListGroup.Item>Films</ListGroup.Item></NavLink>
          <NavLink to='/theme/music' style={{marginBottom:'20px',cursor:'pointer'}} className='block'><ListGroup.Item>Music</ListGroup.Item></NavLink>
          <NavLink to='/theme/history' style={{marginBottom:'20px',cursor:'pointer'}} className='block'><ListGroup.Item>History</ListGroup.Item></NavLink>
        </ListGroup>
      </div>

    </Menu_style>
  )
}
