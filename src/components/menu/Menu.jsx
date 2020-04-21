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
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>

    </Menu_style>
  )
}
