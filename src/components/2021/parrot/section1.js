import React from 'react'
import s from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { BN_CHESTER_REGULAR, LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'
import { Circle } from './Shared'

const RowPlacement = s.div`
  background-color: white;

  padding: 5rem 20rem;

  @media(max-width: 768px) {
    padding: 2rem;
  }

  p {
    font-size: 1.2rem;
    ${LIBRE_FRANKLIN_MEDIUM}

    @media(max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const DropCap = s.span`
  float: left;
  margin-top: -3.3rem;
  font-size: 4.5rem;
  height: 5.7rem;
  color: ${({ color = 'white' }) => color};
  ${BN_CHESTER_REGULAR}

  @media(max-width: 768px) {
    font-size: 2rem;
    margin-top: -1.2rem;
    height: 2.6rem;
  }
`

const Section1 = ({ section: { color, content, dropCap } }) => (
  <RowPlacement>
    <DropCap color={color}>{dropCap}</DropCap>
    {content &&
      content.map((para, idx) => {
        if (idx == 1) {
          return <ReactMarkdown children={para} linkTarget="_blank" />
        } else {
          return para == 'circle' ? (
            <Circle>&#9899; &nbsp; &#9899; &nbsp; &#9899;</Circle>
          ) : (
            <ReactMarkdown children={para} linkTarget="_blank" />
          )
        }
      })}
  </RowPlacement>
)

export default Section1
