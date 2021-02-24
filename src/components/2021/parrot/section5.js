import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

import { Circle, MainPara, ImgCaption, CenterDiv } from './Shared.js'
import { LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'

const RowPlacement = s.div`
	padding: 5rem;
  background-color: white;

	@media(max-width: 768px) {
    padding: 2rem;
  }

  p {
    font-size: 1.1rem;
    ${LIBRE_FRANKLIN_MEDIUM}

    @media(max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const Section5 = ({ json: { content, img1, img2, credit1, credit2 } }) => (
  <RowPlacement>
    <Row>
      <Col md={7}>
        {content &&
          content.map(para =>
            para == 'circle' ? (
              <Circle>&#9899; &nbsp; &#9899; &nbsp; &#9899;</Circle>
            ) : (
              <ReactMarkdown children={para} linkTarget="_blank" />
            )
          )}
      </Col>
      <Col md={5}>
        <CenterDiv>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Img fluid={img1.childImageSharp.fluid} />
            <ImgCaption style={{ fontSize: '10px' }}>{credit1}</ImgCaption>
            <Img fluid={img2.childImageSharp.fluid} />
            <ImgCaption style={{ fontSize: '10px' }}>{credit2}</ImgCaption>
          </div>
        </CenterDiv>
      </Col>
    </Row>
  </RowPlacement>
)

export default Section5
