import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import { BN_CHESTER_REGULAR } from '../../../styles/font'

const RowPlacement = s.div`
  background-color: ${({ bgColor = '#67D072' }) => bgColor};
  padding: 0 15px;

  @media(max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ColCounterPad = s.div`
  margin: 0 -15px;
`

const Caption = s.div`
  color: white;
  font-size: 0.5rem;
  width: 60%;
  text-align: right;
  margin-right: 0;
  margin-left: auto;
  padding: calc(100% - 2rem) 1rem 1rem;
  @media(max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`
const Quote = s.div`
  padding: 20% 4rem 0;
  color: ${({ color }) => color ? color : 'white'};
  font-size: 2.3rem;

  ${BN_CHESTER_REGULAR}
  @media(max-width: 768px) {
    font-size: 1.5rem;
    padding: 4rem 2rem 0;
  }
`

const QuoteAuthor = s.div`
  margin-top: 1rem;
  text-align: center;
  color: ${({ color }) => color ? color : 'white'};
  font-size: 2.5vw;
  ${BN_CHESTER_REGULAR}

  @media(max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const Pic1 = ({ section: { img, quote, author, bgColor, color, credit } }) => (
  <RowPlacement bgColor={bgColor}>
    <Row>
      <Col md={6}>
        <Quote color={color}>{quote}</Quote>
        <QuoteAuthor color={color}>&#8211; {author}</QuoteAuthor>
      </Col>
      <Col md={6}>
        <ColCounterPad>
          <BackgroundImage fluid={img.childImageSharp.fluid}>
            <Caption>{credit}</Caption>
          </BackgroundImage>
        </ColCounterPad>
      </Col>
    </Row>
  </RowPlacement>
)

export default Pic1
