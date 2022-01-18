import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { DM_SERIF_DISPLAY_BOLD, MARTEL_LIGHT } from '../../../styles/font'

import {
  BackgroundWrapper,
} from './shared'

const RightQuoteWrapper = s.div`
  margin: 0rem 5rem 3rem 5rem;
  padding: 1rem;
  background-color: #1C1C1C;
  @media(max-width: 768px) {
    margin: 0rem 1rem 3rem 1rem;
  }
`
const RightQuoteMark = s.p`
  font-size: 4rem;
  margin-bottom: -3rem;
  text-align:right;
  ${DM_SERIF_DISPLAY_BOLD};
  color: ${({ color }) => color};
`

const RightQuoteText = s.p`
  font-size: 1.1rem;
  margin-bottom: 0rem;
  white-space: pre-line;
  text-align:right; 
  ${MARTEL_LIGHT};
  color: ${({ color }) => color};
`

const RightQuotePerson = s.p`
  font-size: 1rem;
  margin-bottom: 0rem;
  text-align:right;
  ${MARTEL_LIGHT};
  color: ${({ color }) => color};
`

const RightQuoteDivider = s.div`
  width: 3.5rem;
  height: 0.25rem;
  margin-top: 1.8rem;
  margin-bottom: 0.2rem;
  margin-right: 0;
  margin-left: auto;
  background-color: ${({ bgColor }) => bgColor};
`

const RightQuote = ({item: { text, person }, color, dashColor}) => (
  <>
    <RightQuoteWrapper>
      <RightQuoteMark color={color}>
        <strong>”</strong> 
      </RightQuoteMark>
      <RightQuoteText color={color}>
        {text}
      </RightQuoteText>
      <RightQuoteDivider bgColor={dashColor}/>
      <RightQuotePerson color={color}>
        {person}
      </RightQuotePerson>
    </RightQuoteWrapper>
  </>
)

const RightQuotes = ({ items, textColor, dashColor}) => (
  <>
    {items &&
        items.map(item => (
          <Col sm={12} md={12}>
            <RightQuote item={item} color={textColor} dashColor={dashColor}/>
          </Col>
        ))}
  </>
)

export default RightQuotes
