import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { FUNKTURM_REGULAR, FUTURA_REGULAR } from '../../../styles/font'
import sampleImg from '../../../content/images/2021/love-issue/sample.png'

const LoveHeading = s.div`
  width: fit-content;
  padding: .5rem 1.2rem;
  margin: 4rem auto 2rem;

  font-size: 4rem;
  line-height 4rem;
  border: 3px solid #73A992;
  color: #73A992;
  ${FUNKTURM_REGULAR};
`
const Articles = s.div`
  background-color: #73A992;
  padding: 2rem 4rem;
  margin: auto;
  width: 75%;
`
const ArticleSpacing = s.div`
  padding: 2rem 0;
`
const ArticleTitle = s.div`
  font-size: 2rem;
  color: white;
  ${FUTURA_REGULAR};
  padding: 2rem 0 2rem 2rem;
`
const ArticleAuthor = s.div`
  font-size: 1rem;
  color: white;
  ${FUTURA_REGULAR};
  padding: 0 0 2rem 2rem;
`

const Article = () => (
  <ArticleSpacing>
    <Row>
      <Col sm={5} md={5}>
        <img src={sampleImg} style={{ width: '100%' }} />
      </Col>
      <Col sm={7} md={7}>
        <ArticleTitle>
          Headline will go here
        </ArticleTitle>
        <ArticleAuthor>BY AUTHOR NAME</ArticleAuthor>
      </Col>
    </Row>
  </ArticleSpacing>
)

const Love = () => (
  <>
    <LoveHeading>LOVE, IRL.</LoveHeading>
    <Articles>
      <Article />
      <Article />
      <Article />
    </Articles>
  </>
)

export default Love