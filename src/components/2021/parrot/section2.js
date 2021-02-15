import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import { Circle, MainPara } from './Shared.js'

const RowPlacement = s.div`
  background-color: #DFDDD0;
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
`
const BlackBg = s.div`
  background-color: black;
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
  padding: 2rem 4rem;
  text-align: center;
  @media(max-width: 768px) {
    font-size: 1.5rem;
    padding: 2rem 2rem 1rem;
  }
`
const QuoteAuthor = s.div`
  text-align: center;
  padding: 0 4rem;
  color: white;
  font-size: 2.5rem;
  @media(max-width: 768px) {
    font-size: 1rem;
  }
`
const Img3Container = s.div`
  padding: 4rem 8rem 4rem 0;
  @media(max-width: 768px) {
    font-size: 1.5rem;
    padding: 2rem 4rem 2rem 0;
  }
`
const Section2 = ({
  section: { img1, caption, img2, quote, img3, author, content },
}) => (
  <RowPlacement>
    <Row>
      <Col md={5}>
        <ColCounterPad>
          <Img fluid={img1.childImageSharp.fluid} />
          <Caption>{caption}</Caption>
          <BlackBg>
            <Img2Container>
              <Img fluid={img2.childImageSharp.fluid} />
            </Img2Container>
            <Quote>{quote}</Quote>
            <QuoteAuthor>&#8211; {author}</QuoteAuthor>
            <Img3Container>
              <Img fluid={img3.childImageSharp.fluid} />
            </Img3Container>
          </BlackBg>
        </ColCounterPad>
      </Col>
      <Col md={7}>
        <TextPad>
          {content &&
            content.map(para =>
              para == 'circle' ? (
                <Circle>&#9899; &nbsp; &#9899; &nbsp; &#9899;</Circle>
              ) : (
                <MainPara>
                  <ReactMarkdown>{para}</ReactMarkdown>
                </MainPara>
              )
            )}
        </TextPad>
      </Col>
    </Row>
  </RowPlacement>
)

export default Section2
