import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const Overlay = styled.div`

background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999999;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width:100%;
  height: 100%;

`
const PreloaderFlex = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100%;

`



export const Preloader = () => (
    <Overlay>
      <PreloaderFlex>
          <Spinner style={{width:'3rem',height:'3rem'}} animation="border" variant="info" />
      </PreloaderFlex>
    </Overlay>
  
)
