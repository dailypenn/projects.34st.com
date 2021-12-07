import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { Section, Title, Tag, Author, Heading, MajorSection, MajorTitle, MajorAuthor } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'
import ArticleGridMajorLeft from './ArticleGridMajorLeft.js'

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
  margin: 2rem 0 0;
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

const MajorImageContainer = s.div`
  position: absolute;
  bottom: 4rem;
  left: 2rem;
  width: calc(100% - 4.5rem);
  height: 59%;
  margin: 20px 5px 0 5px;
  overflow: hidden;
  background-color: #f0f;
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

const MajorArticleContainerSmall = s.div`
  width: 100%;
  display: none;
  @media(max-width: 992px) {
    height: max(33vw, 200px);
    margin: 2.5vw 0 6.5vw 0;
    display: block;
  }
`

const MajorArticleContainerLarge = s.div`
  height: calc(66vw + 4rem);
  width: 100%;
  margin: 2rem 1rem 0;
  background-color: #F8B3AE;
  display: block;
  // padding: 2rem;
  @media(max-width: 992px) {
    display: none;
  }
`

const ArticleGridMajorRight = ({ multimedia, title }) => (
  <Container>
    <Heading color="#DFDA00">{title}</Heading>
    <Row>
    <Col sm={12} md={12} lg={0}>
      <Row>
        <MajorArticleContainerSmall>
            <ArticleContainer>
              <ImageContainer>
                <StyledAnchor link={multimedia[0].published_link}>
                  <img src={multimedia[0].image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', border: '1px solid #999'}}></img>
                </StyledAnchor>
              </ImageContainer>
              <TextContainer>
                <Section>{multimedia[0].section}</Section>
                <Title style={{ marginTop: '0rem' }} href={multimedia[0].published_link} target="_blank">
                  {multimedia[0].title}
                </Title>
                <Author style={{ marginBottom: '0rem' }}>
                  BY {multimedia[0].author}
                </Author>
              </TextContainer>
            </ArticleContainer>
        </MajorArticleContainerSmall>
      </Row>
    </Col>
    <Col sm={12} md={12} lg={7}>
      {multimedia.slice(1, 4) && multimedia.slice(1, 4).map(article => (
        <Row>
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
        </Row>
      ))}
    </Col>
    <Col sm={12} md={12} lg={5}>
      <Row>
        <MajorArticleContainerLarge>
          <StyledAnchor link={multimedia[0].published_link} style={{padding: '2rem'}}>
            <div style={{width: '100%', height: '100%', padding: '2rem'}}>
              <MajorSection>{multimedia[0].section}</MajorSection>
              <MajorTitle>
                {multimedia[0].title}
              </MajorTitle>
              <MajorAuthor style={{ marginBottom: '0rem' }}>
                BY {multimedia[0].author}
              </MajorAuthor>
              <MajorImageContainer>
                <StyledAnchor link={multimedia[0].published_link}>
                  <img src={multimedia[0].image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', border: '1px solid #999'}}></img>
                </StyledAnchor>
              </MajorImageContainer>
            </div>
          </StyledAnchor>
        </MajorArticleContainerLarge>
      </Row>
    </Col>
    </Row>
    
  </Container>
)

export default ArticleGridMajorRight;
