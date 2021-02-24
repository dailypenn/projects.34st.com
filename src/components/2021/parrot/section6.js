import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

import { LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'
import { Circle, CenterDiv } from './Shared'

const RowPlacement = s.div`
  background-color: white;
  padding: 0rem 5rem 0 15px;
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

const Section2 = ({
  json: { content, credit, img },
}) => (
  <RowPlacement>
    <Row>
      <Col md={5}>
        <CenterDiv>
          <div style={{ width: '100%' }}>
          <Img fluid={img.childImageSharp.fluid} />
          <Caption>{credit}</Caption>
          </div>
        </CenterDiv>
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
