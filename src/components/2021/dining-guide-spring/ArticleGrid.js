import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { Title, Tag, Author, Heading } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

const ImageContainer = s.div`
  margin: auto;
  width: 75%;
  @media(max-width: 768px) {
    width: 90%
  }
`

const Container = s.div`
  margin: 2rem 0;
  position: relative;
  @media(max-width: 768px) {
  }
`


const ArticleGrid = ({ multimedia, title }) => (
  <ImageContainer>
    <Heading color="#FFD1C0">{title}</Heading>
    <Row>
      <Col sm={8} md={6}>
        {multimedia.slice(0, 2) &&
          multimedia.slice(0, 2).map(article => (
            <StyledAnchor link={article.link}>
              <Container>
                <Title>
                  <h5 style={{ marginTop: '0.5rem' }}>{article.title}</h5>
                </Title>
                <Tag>
                  <p>{article.subhead}</p>
                  <Author>BY {article.author}</Author>
                </Tag>
                <Img
                  fluid={article.img.childImageSharp.fluid}
                  style={{
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                    filter: 'brightness(60%)',
                  }}
                />
              </Container>
            </StyledAnchor>
          ))}
      </Col>
      <Col sm={8} md={6}>
        {multimedia.slice(2, 4) &&
          multimedia.slice(2, 4).map(article => (
            <StyledAnchor link={article.link}>
              <Container>
                <Title>
                  <h5 style={{ marginBottom: '0.2rem' }}>{article.title}</h5>
                </Title>
                <Tag>
                  <p>{article.subhead}</p>
                  <Author style={{ marginBottom: '0.6rem' }}>
                    BY {article.author}
                  </Author>
                </Tag>
                <Img
                  fluid={article.img.childImageSharp.fluid}
                  style={{
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                    filter: 'brightness(60%)',
                  }}
                />
              </Container>
            </StyledAnchor>
          ))}
      </Col>
    </Row>
  </ImageContainer>
)

export default ArticleGrid;
