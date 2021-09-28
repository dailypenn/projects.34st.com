import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { Title, Tag, Author, Heading } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

const Container = s.div`
  margin: auto;
  width: 85%;
  max-width: 900px;
  @media(max-width: 768px) {
    width: 90%
  }
`

const ArticleContainer = s.div`
  margin: 2rem 0rem 0rem;
  position: relative;
`

const ImageContainer = s.div`
  width: 100%;
  height: min(400px, 40vw);
  overflow: hidden;
  @media(max-width: 768px) {
    height: 70vw;
  }
`

const ArticleGrid = ({ multimedia, title }) => (
  <Container>
    <Heading color="#FFD4C3">{title}</Heading>
    <Row>
      <Col sm={12} md={6} lg={6}>
        {multimedia.slice(0, 2) &&
          multimedia.slice(0, 2).map(article => (
            <StyledAnchor link={article.published_link}>
              <ArticleContainer>
                <Title style={{ marginTop: '0.5rem' }}>
                  {article.title}
                </Title>
                <Tag>
                  <p>{article.subhead}</p>
                  <Author>BY {article.author}</Author>
                </Tag>
                {/* <Img
                  fluid={article.img.childImageSharp.fluid}
                  style={{
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                    filter: 'brightness(60%)',
                  }}
                /> */}
                <ImageContainer>
                  <img src={article.image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', filter: 'brightness(60%)'}}></img>
                </ImageContainer>
              </ArticleContainer>
            </StyledAnchor>
          ))}
      </Col>
      <Col sm={12} md={6} lg={6}>
        {multimedia.slice(2, 4) &&
          multimedia.slice(2, 4).map(article => (
            <StyledAnchor link={article.published_link}>
              <ArticleContainer>
                <Title style={{ marginTop: '0.5rem' }}>
                  {article.title}
                </Title>
                <Tag>
                  <p>{article.subhead}</p>
                  <Author style={{ marginBottom: '0.6rem' }}>
                    BY {article.author}
                  </Author>
                </Tag>
                {/* <Img
                  fluid={article.img.childImageSharp.fluid}
                  style={{
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                    filter: 'brightness(60%)',
                  }}
                /> */}
                <ImageContainer>
                  <img src={article.image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', filter: 'brightness(60%)'}}></img>
                </ImageContainer>
              </ArticleContainer>
            </StyledAnchor>
          ))}
      </Col>
    </Row>
  </Container>
)

export default ArticleGrid;
