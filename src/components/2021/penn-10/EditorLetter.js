import React from 'react'
import ReactMarkdown from 'react-markdown'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { Title, InfoSubhead, Heading, InfoAuthor, DropCap } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

const Container = s.div`
  margin: auto;
  position: relative;
  width: 100%;
  height: auto;
  background-color: #FFF;
  @media(max-width: 768px) {
  }
`

const InfoContainer = s.div`
  margin: auto;
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 5rem;
  padding-left: 13rem;
  background-color: #FFF;
  @media(max-width: 1400px) {
    padding-left: 10rem;
  }
  @media(max-width: 1200px) {
    padding-left: 8rem;
  }
  @media(max-width: 1000px) {
    padding-left: 6rem;
  }
  @media(max-width: 800px) {
    padding-left: 5rem;
  }
  @media(max-width: 600px) {
    padding-left: 3rem;
  }
  @media(max-width: 400px) {
    padding-left: 3rem;
  }
`

const Line = s.div`
  width: ${({ width = '100px' }) => width};
  height: 14px;
  background-color: #532E67;
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
  padding-right: 1rem;
  padding-left: 1rem;
  @media(max-width: 768px) {
    padding-top: 4rem;
  }
`

const Info = ({ letter }) => (
  <Col sm={12} md={5} lg={5} xl={4}>
    <InfoContainer>
        <Heading color="#532E67">{'Letter'}</Heading>
        <Heading color="#532E67">{'From'}</Heading>
        <Heading color="#532E67">{'The'}</Heading>
        <Heading color="#532E67">{'Editor'}</Heading>
        <Line width='160px'/>
        <InfoSubhead style={{ marginTop: '50px'}}>
            {letter.subheading}
        </InfoSubhead>
        <InfoAuthor style={{ marginTop: '45px', marginBottom: '45px' }}>
            BY {letter.author}
        </InfoAuthor>
    </InfoContainer>
  </Col>
)

const Letter = ({ letter }) => (
  <Col sm={12} md={7} lg={7} xl={8}>
    <LetterContainer>
        <DropCap color={'#532E67'}>{'S'}</DropCap>
        {letter.text &&
        letter.text.map((para, idx) => {
            return <ReactMarkdown children={para} linkTarget="_blank" />
        })}
    </LetterContainer>
  </Col>
)

const EditorLetter = ({ letter }) => (
  <Container>
    <Row>
      <Info letter = {letter}/>
      <Letter letter = {letter}/>
    </Row>
  </Container>
)

export default EditorLetter;
