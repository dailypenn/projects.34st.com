import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import { LoveHeading } from './shared.js'

import { FUTURA_MEDIUM, FUTURA_REGULAR } from '../../../styles/font'
import { StyledAnchor } from '../../shared/Typography'

const Articles = s.div`
  background-color: ${({ color = '#283033' }) => color};
  padding: 1.5rem 4rem;
  margin: auto;
  margin-bottom: 6rem;
  width: 75%;

  @media(max-width: 768px) {
    width: 90%;
    padding: 0.5rem 1rem 1rem;
    margin-bottom: 4rem;
  }
`

const ArticleSpacing = s.div`
  margin: 3rem 0;

  @media(max-width: 768px) {
    margin: 2rem 0;
  }
`

const ArticleTitle = s.div`
  font-size: 2rem;
  color: white;
  ${FUTURA_MEDIUM}
  padding: 0 0 0 2rem;

  @media(max-width: 768px) {
    font-size: 1.5rem;
    padding: 0rem 0.5rem 0;
    line-height: 1.9rem;
  }

  @media(max-width: 576px) {
    margin-top: 1rem;
  }
`

const ArticleSubhead = s.div`
  font-size: 1.3rem;
  color: white;
  ${FUTURA_REGULAR}
  padding: 1rem 0 0 2rem;
  margin-bottom: 3rem;

  @media(max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 0.5rem 0;
    // line-height: 1.4rem;
    margin-bottom: 1rem;
  }
`

const ArticleAuthor = s.div`
  font-size: 1rem;
  color: white;
  ${FUTURA_MEDIUM}
  padding-left: 2rem;

  @media(max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`

const Article = ({ article: { title, subhead, author, image, published_link } }) => (
  <ArticleSpacing>
    <StyledAnchor link={published_link}>
      <Row>
        <Col sm={5} md={5}>
          <Img fluid={image.childImageSharp.fluid} />
        </Col>
        <Col sm={7} md={7}>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleSubhead>{subhead}</ArticleSubhead>
          <ArticleAuthor>BY {author.toUpperCase()}</ArticleAuthor>
        </Col>
      </Row>
    </StyledAnchor>
  </ArticleSpacing>
)

const Love = ({ articles, color = '#283033', section }) => (
  <>
    <div style={{ margin: '0 2rem' }}>
      <LoveHeading color={color}>{section}</LoveHeading>
    </div>
    <Articles color={color}>
      {articles && articles.map(article => <Article article={article} />)}
    </Articles>
  </>
)

export default Love
