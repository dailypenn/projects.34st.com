import React from 'react'
import s from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { BN_CHESTER_REGULAR } from '../../../styles/font'
import { Circle, MainPara } from './Shared'

const RowPlacement = s.div`
  background-color: white;

  padding: 5rem 20rem;

  @media(max-width: 768px) {
    padding: 2rem;
  }
`

const DropCap = s.span`
  float: left;
  margin-top: -3.3rem;
  font-size: 4.5rem;
  height: 5.7rem;
  color: #9BE0A2;
  ${BN_CHESTER_REGULAR}

  @media(max-width: 768px) {
    font-size: 2rem;
    margin-top: -1.2rem;
    height: 2.6rem;
  }
`
const Section1 = ({ section: { content } }) => (
  <RowPlacement>
    {content &&
      content.map((para, idx) => {
        if (idx == 0) {
          return <DropCap>{para}</DropCap>
        } else if (idx == 1) {
          return (
            <MainPara>
              <ReactMarkdown>{para}</ReactMarkdown>
            </MainPara>
          )
        } else {
          return para == 'circle' ? (
            <Circle>&#9899; &nbsp; &#9899; &nbsp; &#9899;</Circle>
          ) : (
            <MainPara>
              <ReactMarkdown>{para}</ReactMarkdown>
            </MainPara>
          )
        }
      })}
  </RowPlacement>
)

export default Section1
