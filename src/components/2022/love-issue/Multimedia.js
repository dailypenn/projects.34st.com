import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { FUTURA_REGULAR } from '../../../styles/font'
import { Tag, Author, LoveHeading, BoldText, RegularText } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

import InstagramEmbed from 'react-instagram-embed'

const ImageContainer = s.div`
  margin: auto;
  width: 75%;
  @media(max-width: 768px) {
    width: 90%
  }
`

const Container = s.div`
  margin: 5rem 0;
  border-style: solid;
  border-color: #fff;
  border-width: 4px;
  background-color: #f00;
  position: relative;
  @media(max-width: 768px) {
  }
`
const CenterContainer = s.div`
  padding: 0rem;
  @media(max-width: 768px) {
    padding: 0 3rem 0 3rem;
  }
`

const Multimedia = ({ multimedia }) => (
  <ImageContainer>
    <LoveHeading color="#8C2F39">Multimedia</LoveHeading>
    <BoldText>
      {'Photo essay: Philadelphia, The City of Non–⁠Romantic Love '.toUpperCase()}
    </BoldText>
    <RegularText style={{ marginBottom: '1rem' }}>
      {multimedia[0].subhead}
    </RegularText>
    <Row>
      <Col sm={12} md={6}>
        <CenterContainer>
          <StyledAnchor link={multimedia[0].link}>
            <Container>
              <Tag>
                <p style={{ marginBottom: '0.2rem', fontSize: '1.1rem' }}>{multimedia[0].title}</p>
                <p style={{ marginBottom: '0.2rem', fontSize: '0.9rem' }}>Read full article ➜</p>
                <Author>BY {multimedia[0].author}</Author>
              </Tag>
              <Img fluid={multimedia[0].img.childImageSharp.fluid} />
            </Container>
          </StyledAnchor>
        </CenterContainer>
      </Col>
      <Col sm={12} md={1}></Col>
      <Col sm={12} md={5}>
        <CenterContainer>
        <InstagramEmbed
          url="https://www.instagram.com/tv/CZ9uR61pQv0/?utm_medium=copy_link"
          clientAccessToken="947756802416627|a36b8dffc1596399ee685a4677ebc2a2"
          maxWidth={658}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
        </CenterContainer>
      </Col>
    </Row>
  </ImageContainer>
)

export default Multimedia
