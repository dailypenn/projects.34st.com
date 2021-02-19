import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

import { Circle, MainPara, ImgCaption, CenterDiv } from './Shared.js'

const RowPlacement = s.div`
	padding: 5rem;
  background-color: white;

	@media(max-width: 768px) {
    padding: 2rem;
  }
`
const Section5 = ({ json: { content, img1, img2, caption1, caption2 } }) => (
  <RowPlacement>
    <Row>
      <Col md={7}>
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
      </Col>
      <Col md={5}>
        <CenterDiv>
          <div style={{ width: '100%' }}>
            <Img fluid={img1.childImageSharp.fluid} />
            <ImgCaption>{caption1}</ImgCaption>
            <Img fluid={img2.childImageSharp.fluid} />
            <ImgCaption>{caption2}</ImgCaption>
          </div>
        </CenterDiv>
      </Col>
    </Row>
  </RowPlacement>
)

export default Section5
