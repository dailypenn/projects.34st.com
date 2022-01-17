import React from 'react'
import s from 'styled-components'
import { LORA_REGULAR, LORA_MEDIUM, LORA_BOLD } from '../../../styles/font'

const Container = s.div`
  width: 100vw;
  background-color: ${({ color }) => color};
  padding: 3rem 0 3rem 0;
`

const Circle = s.div` 
  height: 20px;
  width: 20px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: inline-block;
  margin: 0 0.2rem 0 0.2rem;
`

const Divider = ({ color, backgroundColor }) => (
  <Container color={backgroundColor}>
    <div style={{margin: '0 auto', width: 'fit-content'}}>
      <Circle color={color}/>
      <Circle color={color}/>
      <Circle color={color}/>
    </div>
  </Container>
)

export default Divider