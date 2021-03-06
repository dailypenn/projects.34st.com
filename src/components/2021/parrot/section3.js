import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import { Circle, CenterDiv } from './Shared.js'
import ReactMarkdown from 'react-markdown'

import { BN_CHESTER_REGULAR, LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'

const TextDGreen = s.h3`
	color: ${({ color = 'white'}) => color};
	font-size: 3.3rem;
  padding: 0 1rem;
  ${BN_CHESTER_REGULAR}

	@media(max-width: 768px) {
    font-size: 1.6rem;
		line-height: 2rem;
  }
`
const QuoteAuthor = s.div`
	font-size: 1.5rem;
	line-height: 2.6rem;
	text-align: center;
  color: ${({ color = 'white'}) => color};
  ${BN_CHESTER_REGULAR}

  margin-top: 2rem;

	@media(max-width: 768px) {
    font-size: 1.2rem;
		line-height: 1.2rem;
		padding: 0.5rem 2rem 2rem;
  }
`
export const RowPlacement = s.div`
	padding: 5rem 5rem 0;
  background-color: white;
  margin-bottom: 2rem;

	@media(max-width: 768px) {
    padding: 2rem 2rem 0;
  }

  p {
    font-size: 1.2rem;
    ${LIBRE_FRANKLIN_MEDIUM}

    @media(max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const Section3 = ({ json: { author, color, content, quote } }) => (
  <RowPlacement>
    <Row>
      <Col md={5}>
        <CenterDiv>
          <div>
            <TextDGreen color={color}>{quote}</TextDGreen>
            <QuoteAuthor color={color}>&#8211; {author}</QuoteAuthor>
          </div>
        </CenterDiv>
      </Col>
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
    </Row>
  </RowPlacement>
)

export default Section3
