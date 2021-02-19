import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import { Circle, MainPara, CenterDiv } from './Shared.js'
import ReactMarkdown from 'react-markdown'

import { BN_CHESTER_REGULAR } from '../../../styles/font'

const TextDGreen = s.h3`
	color: #DB74D8;
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
  color: #DB74D8;
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
`
const Section3 = ({ json: { quote, author, content } }) => (
  <RowPlacement>
    <Row>
      <Col md={5}>
        <CenterDiv>
          <div>
            <TextDGreen>{quote}</TextDGreen>
            <QuoteAuthor>&#8211; {author}</QuoteAuthor>
          </div>
        </CenterDiv>
      </Col>
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
    </Row>
  </RowPlacement>
)

export default Section3
