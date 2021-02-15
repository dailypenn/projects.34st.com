import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import { Circle, MainPara } from './Shared.js'

const Caption = s.div`
  font-size: .6rem;
  padding-top 0.5rem;
  width: 100%
`

const RowPlacement = s.div`
  background-color: #DFDDD0;
  padding: 5rem;
  @media(max-width: 768px) {
    padding: 2rem;
  }
`

const ImageContainer = s.div`
  @media(min-width: 768px) {
    padding-left: 2rem;
  }
`

const DropCap = s.span`
  float: left;
  margin-top: -3.3rem;
  font-size: 4.5rem;
  height: 5.7rem;
  @media(max-width: 768px) {
    font-size: 2rem;
    margin-top: -1.2rem;
    height: 2.6rem;
  }
`

const Section1 = ({ section: { img, caption, content } }) => (
  <RowPlacement>
    <Row>
      <Col md={7}>
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
      </Col>
      <Col md={5}>
        <ImageContainer>
          <Img fluid={img.childImageSharp.fluid} />
          <Caption>{caption}</Caption>
        </ImageContainer>
      </Col>
    </Row>
  </RowPlacement>
)

export default Section1
