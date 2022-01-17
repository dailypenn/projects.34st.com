import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { DM_SERIF_DISPLAY_BOLD } from '../../../styles/font'

import {
  BackgroundWrapper,
} from './shared'

const LeftQuoteWrapper = s.div`
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 0rem;
  padding-bottom: 2rem;
`
const LeftQuoteMark = s.p`
  font-size: 4rem;
  margin-bottom: -3rem;
  padding-top: 1rem;
  ${DM_SERIF_DISPLAY_BOLD};
  color: ${({ color }) => color};
`

const LeftQuoteText = s.p`
  font-size: min(1.4rem, 2.6vw);
  margin-bottom: 0rem;
  white-space: pre-line;
  ${DM_SERIF_DISPLAY_BOLD};
  color: ${({ color }) => color};
`

const LeftQuotePerson = s.p`
  font-size: min(1.2rem, 2.4vw);
  margin-bottom: 0rem;
  ${DM_SERIF_DISPLAY_BOLD};
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
