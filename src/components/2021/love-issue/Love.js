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
  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
  }
`
const Articles = s.div`
  background-color: #73A992;
  padding: 2rem 4rem;
  margin: auto;
  width: 75%;
  @media(max-width: 768px) {
    width: 90%;
    padding: 0.5rem 1rem 1rem;
  }
`
const ArticleSpacing = s.div`
  padding: 2rem 0;
  @media(max-width: 768px) {
    padding: 1.5rem 0rem;
  }
`
const ArticleTitle = s.div`
  font-size: 2rem;
  color: white;
  ${FUTURA_REGULAR};
  padding: 2rem 0 2rem 2rem;
  @media(max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 0.5rem 0rem 0.5rem;
  }
`
const ArticleAuthor = s.div`
  font-size: 1rem;
  color: white;
  ${FUTURA_REGULAR};
  padding: 0 0 2rem 2rem;
  @media(max-width: 768px) {
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }
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