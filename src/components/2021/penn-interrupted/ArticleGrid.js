import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { Section, Title, Author, Heading } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

const Container = s.div`
  margin: auto;
  width: 90%;
  // max-width: 900px;
  @media(max-width: 768px) {
    width: 90%
  }
`

const ArticleContainer = s.div`
  display: flex;
  margin: 1rem 0 0;
  height: 22vw;
  width: auto;
  @media(max-width: 992px) {
    height: max(33vw, 200px);
    margin: 3.5vw 0 3.5vw 0;
  }
`

const ImageContainer = s.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 5px 0 5px;
  overflow: hidden;
`

const TextContainer = s.div`
  position: relative;
  // background-color: black;
  padding: 1.2rem;
  padding-top: 1.6rem;
  width: 100%;
  height: 100%;
  margin: 0 5px 0 5px;
  overflow: hidden;
  @media(max-width: 992px) {
    padding: 5vw;
  }
`

const ArticleSpacer = s.div`
  height: 2.5rem;
  @media(max-width: 992px) {
    height: 0px;
  }
`

const ArticleGrid = ({ multimedia, title }) => (
  <Container>
    <Heading color="#DFDA00">{title}</Heading>
    <Row>
      {multimedia.slice(0, 2) && multimedia.slice(0, 2).map(article => (
        <Col sm={12} md={12} lg={6}>
          <ArticleContainer>
            <ImageContainer>
              <StyledAnchor link={article.published_link}>
                <img src={article.image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', border: '1px solid #999'}}></img>
              </StyledAnchor>
            </ImageContainer>
            <TextContainer>
              <Section>{article.section}</Section>
              <Title style={{ marginTop: '0rem' }} href={article.published_link} target="_blank">
                {article.title}
              </Title>
              <Author style={{ marginBottom: '0rem' }}>
                BY {article.author}
              </Author>
            </TextContainer>
          </ArticleContainer>
        </Col>
      ))}
    </Row>
    <ArticleSpacer/>
    <Row>
      {multimedia.slice(2, 4) && multimedia.slice(2, 4).map(article => (
        <Col sm={12} md={12} lg={6}>
          <ArticleContainer>
            <ImageContainer>
              <StyledAnchor link={article.published_link}>
                <img src={article.image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', border: '1px solid #999'}}></img>
              </StyledAnchor>
            </ImageContainer>
            <TextContainer>
              <Section>{article.section}</Section>
              <Title style={{ marginTop: '0rem' }} href={article.published_link} target="_blank">
                {article.title}
              </Title>
              <Author style={{ marginBottom: '0rem' }}>
                BY {article.author}
              </Author>
            </TextContainer>
          </ArticleContainer>
        </Col>
      ))}
    </Row>
    
  </Container>
)

export default ArticleGrid;
