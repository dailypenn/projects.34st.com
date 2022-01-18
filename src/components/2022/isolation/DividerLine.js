import React from 'react'
import s from 'styled-components'
import { LORA_REGULAR, LORA_MEDIUM, LORA_BOLD } from '../../../styles/font'

const Container = s.div`
  width: 100vw;
  background-color: ${({ color }) => color};
  padding: 0rem 0 3rem 0;
`

const Line = s.div` 
  height: 10px;
  width: 100%;
  background-color: ${({ color }) => color};
`

const DividerLine = ({ color, backgroundColor }) => (
  <Container color={backgroundColor}>
    <Line color={color}/>
  </Container>
)

export default DividerLine