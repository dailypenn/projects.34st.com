import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { FUNKTURM_REGULAR, FUTURA_REGULAR } from '../../../styles/font'
import { StyledAnchor } from '../../shared/Typograph'

const LoveHeading = s.div`
  width: fit-content;
  padding: .5rem 1.2rem;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 4rem;
  line-height 4rem;
  border: 3px solid ${({ color = '#283033' }) => color};
  color: ${({ color = '#283033' }) => color};
  ${FUNKTURM_REGULAR};
  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
  }
`
const LoveHeadingDoubleMargin = s.div`
  margin: 0 1rem;
`
const Articles = s.div`
  background-color: ${({ color = '#283033' }) => color};
  padding: 2rem 4rem;
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
    padding: 1rem 0.5rem 0;
    line-height: 1.9rem;
  }
`

const ArticleAuthor = s.div`
  font-size: 1rem;
  color: white;
  ${FUTURA_REGULAR};
  padding: 0 0 2rem 2rem;
  @media(max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`

const Article = ({article: { title, subhead, author, img, link }}) => (
  <ArticleSpacing>
    <StyledAnchor href={link} target="_blank">
      <Row>
        <Col sm={5} md={5}>
          <Img fluid={img.childImageSharp.fluid} />
        </Col>
        <Col sm={7} md={7}>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleAuthor>BY {author.toUpperCase()}</ArticleAuthor>
        </Col>
      </Row>
    </StyledAnchor>
  </ArticleSpacing>
)

const Love = ({ articles, color='#283033', section }) => (
  <>
    <LoveHeadingDoubleMargin>
      <LoveHeading color={color}>{section}</LoveHeading>
    </LoveHeadingDoubleMargin>
    <Articles color={color}>
      {articles &&
        articles.map(article => (
          <Article article={article}/>
        ))}
    </Articles>
  </>
)

export default Love
