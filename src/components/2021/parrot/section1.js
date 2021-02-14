import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

const BackgroundImage = s.div`
  background-size: cover;
  width: 100%;
  background-image: url(${({ img = 'noimg' }) => img});
`

const Title = s.div`
  padding: 0 12.3rem 0 7.5rem;
  font-family: 'BN Chester';
`

const BlackBgShade = s.div`
  background-color: rgba(0, 0, 0, .66);
`

const Watermark = s.div `
  opacity: 75%;
  width: 20%;
  padding: 2rem 0 15.5rem;
  margin: auto;
`

const Header = s.div`
  font-size: 7.3rem;
  color: white;
`

const Subheader = s.div`
  font-size: 5.5rem;
  color: white;
`

const CoverText = s.div`
  padding: 13rem 0 9.5rem 0;
  width: 38%;
  margin: auto;
  text-align: center;
  color: white;
`

const Description = s.div`
  font-size: 2rem;
  font-family: 'Libre Franklin', sans-serif;
`

const Author = s.div`
  font-size: 1.8rem;
  font-family: 'Libre Franklin', sans-serif;
  padding-top: 4.2rem;
`

const Caption = s.div`
  font-size: .6rem;
  padding-top 0.5rem;
  width: 100%
`

const RowPlacement = s.div`
  background-color: #DFDDD0;
  padding: 5rem;
  @media(max-width: 768px) {
    padding: 2rem;
  }
`

const ImageContainer = s.div`
  vertical-align: middle;
`

const Section1 = ({ section: {img, caption, content}}) => (
  <RowPlacement>
    <Row>
      <Col md={7}>
        {content &&
          content.map(para => (
            <p>{para}</p>
          ))}
      </Col>
    <Col md={5}>
      <ImageContainer>
        <Img fluid={img.childImageSharp.fluid} />
        <Caption>{caption}</Caption>
      </ImageContainer>
    </Col>
    </Row>
  </RowPlacement>
)

export default Section1