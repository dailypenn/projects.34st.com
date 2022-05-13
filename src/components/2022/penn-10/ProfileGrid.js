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

const ProfileImage = s.div`
  width: 100%;
  // height: min(400px, 40vw);
  overflow: hidden;
  // @media(max-width: 768px) {
  //   height: 70vw;
  // }
`

const Profile = ({profiles}) => (
  <Col sm={12} md={6} lg={6}>
    {profiles &&
      profiles.map(profile => (
        <StyledAnchor link={profile.published_link}>
          <Container>
            <ProfileImage>
              <img src={profile.image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}></img>
            </ProfileImage>
            <Title style={{ padding: 'calc(100% + 0.6rem) 1rem 1rem' }}>
              {profile.title}
            </Title>
            <Tag style={{ padding: 'calc(100% + 5.5rem) 0.2rem 0.2rem' }}>
              {profile.subhead}
            </Tag>
          </Container>
        </StyledAnchor>
    ))}
  </Col>
)

const ArticleGrid = ({ profiles, title }) => (
  <ImageContainer>
    <BoxedHeading>{title}</BoxedHeading>
    <Row>
      <Profile profiles = {profiles.slice(0,5)}/>
      <Profile profiles = {profiles.slice(5,10)}/>
    </Row>
  </ImageContainer>
)

export default ArticleGrid;
