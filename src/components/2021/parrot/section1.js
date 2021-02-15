import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

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
const MainPara = s.p`
	font-size: 1.5rem;
	font-family: 'Libre Franklin', sans-serif;
  @media(max-width: 768px) {
    font-size: 1rem;
  }
`

const ImageContainer = s.div`
  @media(min-width: 768px) {
    padding-left: 2rem;
  }
`

const StartLetter = s.div`
  font-size: 5.5rem;
  height: 0;
  margin-top: -2rem;
  margin-bottom: 4.55rem; 
  color: #2B3C2E; 
  @media(max-width: 768px) {
    font-size: 2rem;
    margin-top: -0.7rem;
    margin-bottom: 1.1rem;
  }
`

const Section1 = ({ section: {img, caption, content}}) => (
  <RowPlacement>
    <Row>
      <Col md={7}>    
        {content &&
          content.map((para, idx) => {
            if (idx == 0) {
              return (<StartLetter>{para}</StartLetter>)
            } else if (idx == 1) {
              return (<MainPara><ReactMarkdown>{"&nbsp; &nbsp; &nbsp; &nbsp; "+ para}</ReactMarkdown></MainPara>)
            } else {
              return (<MainPara><ReactMarkdown>{para}</ReactMarkdown></MainPara>)
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