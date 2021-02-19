import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

import { Circle, MainPara, ImgCaption } from './Shared.js'
import { LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'

const RowPlacement = s.div`
	padding: 2rem 5rem 5rem;
  background-color: white;

	@media(max-width: 768px) {
    padding: 0 2rem 2rem;
  }

  p {
    font-size: 1.1rem;
    ${LIBRE_FRANKLIN_MEDIUM}

    @media(max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const Section4 = ({ json: { content, img, caption } }) => (
  <RowPlacement>
    <Row>
      <Col md={7}>
        {content &&
          content.map(para =>
            para == 'circle' ? (
              <Circle>&#9899; &nbsp; &#9899; &nbsp; &#9899;</Circle>
            ) : (
              <ReactMarkdown children={para} />
            )
          )}
      </Col>
      <Col md={5}>
        <Img fluid={img.childImageSharp.fluid} />
        <ImgCaption>{caption}</ImgCaption>
      </Col>
    </Row>
  </RowPlacement>
)

export default Section4
