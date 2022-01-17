import React from 'react'
import s from 'styled-components'
import { LORA_REGULAR, LORA_MEDIUM, LORA_BOLD } from '../../../styles/font'

const Container = s.div`
  width: 100vw;
  padding: 3rem 0 2rem 0;
  background-color: ${({ color }) => color};
`

const Text = s.p` 
  margin: 0;
  padding: 1rem 3rem 1rem 3rem;
  text-align: left;
  font-size: 1.3rem;
  line-height 1.6rem;
  color: #FFF;
  white-space: pre-line;
  ${LORA_REGULAR}
`

const TextSection = ({ content, backgroundColor }) => (
  <Container color={backgroundColor}>
    <Text>{content}</Text>
  </Container>
)

export default TextSection