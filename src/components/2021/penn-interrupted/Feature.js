import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { StyledAnchor } from '../../shared/Typography'

import {
  AGRANDIR_TEXTBOLD,
  AGRANDIR_REGULAR,
  DERIVIA
} from '../../../styles/font'

const Container = s.div`
  margin: auto;
  width: 90%;
  padding: 10vw 0 6rem 0;
  // max-width: 900px;
`

const Section = s.div` 
	z-index: 1000;
  width: fit-content;
	height: auto;
	color: #111;
	font-size: 14px;
  padding: 6px 10px 3px 10px;
  border-radius: 20px;
  background-color: #DFDA00;
  margin-bottom: 40px;
  text-transform: uppercase;
	${AGRANDIR_TEXTBOLD}
`

const Heading = s.a`
  width: fit-content;
  font-size: 6vw;
  line-height 7vw;
  text-transform: uppercase;
  color: ${({ color = '#DFDA00' }) => color};
  ${DERIVIA}
  @media(max-width: 768px) {
    font-size: 4rem;
    line-height 4.5rem;
  }
  &:hover {
    color: #DFDA00;
    // text-decoration: none;
  }
`

export const Subheading = s.p`
	${AGRANDIR_REGULAR}
  color: #DFDA00;
	font-size: max(1.7vw, 20px);
  margin-top: 0.8rem;
`

export const Author = s.p`
	${AGRANDIR_TEXTBOLD}
  color: #F8B3AE;
	text-transform: uppercase;
	font-size: max(1.8vw, 23px);
  margin-top: 0.8rem;
`

const ImageContainer = s.div`
  position: relative;
  float: right;
  width: 90%;
  height: 100%;
  margin: 0 1rem 0 5px;
  overflow: hidden;
  @media(max-width: 768px) {
    width: 100%;
  }
`

const Feature = ({ link, heading, headline, subheading, author, img }) => (
  <Container>
    <Row>
      <Col sm={12} md={5} lg={5}>
        <Section>Letter from the Editor</Section>
        <Heading color="#DFDA00" href={link} target="_blank">{headline}</Heading>
        <Subheading>{subheading}</Subheading>
        <Author>BY {author}</Author>
      </Col>
      <Col sm={12} md={7} lg={7}>
        <ImageContainer>
          <StyledAnchor link={link}>
            <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', border: '1px solid #999' }}></img>
          </StyledAnchor>
        </ImageContainer>
      </Col>
    </Row>
    
  </Container>
)

export default Feature;