import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { DM_SERIF_DISPLAY_BOLD, MARTEL_LIGHT } from '../../../styles/font'

import {
  BackgroundWrapper,
} from './shared'

const LeftQuoteWrapper = s.div`
  margin: 0rem 5rem 3rem 5rem;
  padding: 1rem;
  background-color: #1C1C1C;
  @media(max-width: 768px) {
    margin: 0rem 1rem 3rem 1rem;
  }
`
const LeftQuoteMark = s.p`
  font-size: 4rem;
  margin-bottom: -3rem;
  ${DM_SERIF_DISPLAY_BOLD};
  color: ${({ color }) => color};
`

const LeftQuoteText = s.p`
  font-size: 1.1rem;
  margin-bottom: 0rem;
  white-space: pre-line;
  ${MARTEL_LIGHT};
  color: ${({ color }) => color};
`

const LeftQuotePerson = s.p`
font-size: 1rem;
  margin-bottom: 0rem;
  ${MARTEL_LIGHT};
  color: ${({ color }) => color};
`

const LeftQuoteDivider = s.div`
  width: 3.5rem;
  height: 0.25rem;
  margin-top: 1.8rem;
  margin-bottom: 0.2rem;
  background-color: ${({ bgColor }) => bgColor};
`

const LeftQuote = ({item: { text, person }, color, dashColor}) => (
  <>
    <LeftQuoteWrapper>
      <LeftQuoteMark color={color}>
        <strong>“</strong> 
      </LeftQuoteMark>
      <LeftQuoteText color={color}>
        {text}
      </LeftQuoteText>
      <LeftQuoteDivider bgColor={dashColor}/>
      <LeftQuotePerson color={color}>
        {person}
      </LeftQuotePerson>
    </LeftQuoteWrapper>
  </>
)

const LeftQuotes = ({ items, textColor, dashColor}) => (
  <>
    {items &&
        items.map(item => (
          <Col sm={12} md={12}>
            <LeftQuote item={item} color={textColor} dashColor={dashColor}/>
          </Col>
        ))}
  </>
)

export default LeftQuotes
