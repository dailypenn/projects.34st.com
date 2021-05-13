import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { Title, Tag, BoxedHeading } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

const ImageContainer = s.div`
  margin: auto;
  width: 85%;
  position: relative;
  max-width: 1100px;
  @media(max-width: 768px) {
  }
`

const Container = s.div`
  margin: auto auto 12.5rem;
  position: relative;
  width: 100%;
  @media(max-width: 768px) {
  }
`

const Background = s.div`
  background-image: url(${({ img }) => img});
  width: 100%;
  background-size: cover;
  border: '3px solid #CCC';
`

const Profile = ({profiles}) => (
  <Col sm={12} md={6} lg={6}>
    {profiles &&
      profiles.map(profile => (
        <StyledAnchor link={profile.link}>
          <Container>
            <Img
              fluid={profile.img.childImageSharp.fluid}
              style={{ border: '3px solid #CCC' }}
            />
            <Title style={{ padding: 'calc(100% + 2rem) 1rem 1rem' }}>
              {profile.name}
            </Title>
            <Tag style={{ padding: 'calc(100% + 4.5rem) 0.2rem 0.2rem' }}>
              {profile.subhead}
            </Tag>
          </Container>
        </StyledAnchor>
    ))}
  </Col>
)

const ArticleGrid = ({ profiles, title }) => (
  <ImageContainer>
    <BoxedHeading color="#532E67">{title}</BoxedHeading>
    <Row>
      <Profile profiles = {profiles.slice(0,5)}/>
      <Profile profiles = {profiles.slice(5,10)}/>
    </Row>
  </ImageContainer>
)

export default ArticleGrid;
