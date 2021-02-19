import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

import { BN_CHESTER_REGULAR, LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'
import { Circle, MainPara } from './Shared'

const RowPlacement = s.div`
  background-color: white;
  padding: 5rem 5rem 0 15px;
  @media(max-width: 768px) {
    padding: 0 2rem 1rem 15px;
  }
`
const ColCounterPad = s.div`
  margin: 0 -15px;
  @media(max-width: 768px) {
    margin-right: -30px;
  }
`
const Caption = s.div`
  font-size: .6rem;
  padding: 0.5rem 0 1rem;
  width: 60%;
  margin-right: 1rem;
  margin-left: auto;
  @media(max-width: 768px) {
    width: 100%;
    padding: 0.5rem 1rem 1rem;
  }
`
const TextPad = s.div`
  padding-left: 3rem;
  @media(max-width: 768px) {
    padding-left: calc(1rem + 1px);
  }

  p {
    font-size: 1.1rem;
    ${LIBRE_FRANKLIN_MEDIUM}

    @media(max-width: 768px) {
      font-size: 1rem;
    }
  }
`
const BlackBg = s.div`
  padding: 2rem 1rem;
  background-color: #DB74D8;

  @media(max-width: 768px) {
    margin-bottom: 2rem;
  }
`
const Img2Container = s.div`
  padding: 6rem 0 0 6rem;
  @media(max-width: 768px) {
    padding: 2rem 0 0 2rem;
  }
`
const Quote = s.div`
  font-weight: bold;
  color: white;
  font-size: 4.5rem;

  text-align: center;
  ${BN_CHESTER_REGULAR}
  @media(max-width: 768px) {
    font-size: 1.5rem;
    padding: 2rem 2rem 1rem;
  }
`
const QuoteAuthor = s.div`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  ${BN_CHESTER_REGULAR}
  margin-top: 3rem;

  @media(max-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`

const Section2 = ({
  section: { img, caption, quote, author, content },
}) => (
  <RowPlacement>
    <Row>
      <Col md={5}>
        <ColCounterPad>
          <Img fluid={img.childImageSharp.fluid} />
          <Caption>{caption}</Caption>
          <BlackBg>
            <Quote>{quote}</Quote>
            <QuoteAuthor>&#8211; {author}</QuoteAuthor>
          </BlackBg>
        </ColCounterPad>
      </Col>
      <Col md={7}>
        <TextPad>
          {content &&
            content.map(para =>
              para === 'circle' ? (
                <Circle>&#9899; &nbsp; &#9899; &nbsp; &#9899;</Circle>
              ) : (
                <ReactMarkdown children={para} linkTarget="_blank" />
              )
            )}
        </TextPad>
      </Col>
    </Row>
  </RowPlacement>
)

export default Section2
