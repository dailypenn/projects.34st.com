import React from 'react'
import ReactMarkdown from 'react-markdown'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import InstagramEmbed from 'react-instagram-embed'

import { Title, InfoSubhead, InfoAuthor, DropCap } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

import { AGRANDIR_GRANDHEAVY } from '../../../styles/font'
  

const Container = s.div`
  margin: auto;
  position: relative;
  width: 100%;
  height: auto;
  background-color: #FFF;
  margin-left: 0rem;
  @media(max-width: 768px) {
  }
`

const HeaderContainer = s.div`
  margin: auto;
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 5rem;
  padding-left: 23%;
  background-color: #FFF;
  @media(max-width: 1400px) {
    padding-left: 12rem;
  }
  @media(max-width: 1200px) {
    padding-left: 9rem;
  }
  @media(max-width: 1000px) {
    padding-left: 6rem;
  }
  @media(max-width: 800px) {
    padding-left: 4rem;
  }
  @media(max-width: 600px) {
    padding-left: 3rem;
  }
  @media(max-width: 400px) {
    padding-left: 2rem;
  }
`

const Line = s.div`
  width: ${({ width = '100px' }) => width};
  height: 14px;
  background-color: #532E67;
  max-width: 750px;
  @media(max-width: 768px) {
  }
`

const LetterContainer = s.div`
  margin: auto;
  position: relative;
  width: 100%;
  height: auto;
  background-color: #FFF;
  padding-top: 10rem;
  padding-right: 5rem;
  margin-left: 5rem;
  @media(max-width: 768px) {
    padding-top: 4rem;
  }
`

export const Heading = s.div`
  width: fit-content;
  padding: 0rem;
  margin: 0rem;
  text-align: left;
  font-size: 3rem;
  line-height 3rem;
  color: ${({ color = '#532E67' }) => color};
  ${AGRANDIR_GRANDHEAVY}
  @media(max-width: 768px) {
    font-size: 2rem;
    line-height 2rem;
  }
`

const Header = ({ info }) => (
    <>
        <HeaderContainer>
            <Heading color="#532E67">{'P*NN DECLASSIFIED:'}</Heading>
            <Heading color="#532E67">{'SCHOOL SURVIVAL GUIDE'}</Heading>
            <Line width='70%'/>
            <InfoAuthor style={{ marginTop: '20px', marginBottom: '10px' }}>
                BY {info.author}
            </InfoAuthor>
            <InfoSubhead style={{ marginTop: '10px', marginBottom: '10px', maxWidth: '80%'}}>
                {info.subheading}
            </InfoSubhead>
        </HeaderContainer>
    </>
)

const VidFormat = s.div`
  width: 100%;
  margin: auto;
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  iframe {
    max-width: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem 4rem;
  }
`

const Instagram = ({ info }) => (
  <Col sm={12} md={12} lg={12}>
    <VidFormat>
      <InstagramEmbed
        url={info.link}
        clientAccessToken="947756802416627|a36b8dffc1596399ee685a4677ebc2a2"
        maxWidth={400}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      />
    </VidFormat>
  </Col>
)

const PennDeclassified = ({ info }) => (
  <Container>
    <Row>
      <Header info = {info}/>
      <Instagram info = {info}/>
    </Row>
  </Container>
)

export default PennDeclassified;
