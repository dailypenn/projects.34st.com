import React from 'react'
import s from 'styled-components'
import { FUTURA_REGULAR } from '../../../styles/font'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import {
  Tag,
  Author,
  LoveHeading,
  BoldText,
  RegularText
} from './shared.js'
import { useStaticQuery, graphql } from 'gatsby'

const BoxedText = s.div`
  margin: 2rem 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 1.2vw;
  border: 3px solid #FDB6B0;
	color: #FDB6B0;
	${FUTURA_REGULAR}
  @media(max-width: 768px) {
    font-size: 1.1rem;
    margin: 0;
  }
`
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
const MobileContainer = s.div`
  margin: 2rem 0;
  position: relative;
  @media(max-width: 768px) {
    margin: 0
  }
`

const NoMarginRow = s(Row)`
  margin-right: 0px;
  margin-top: -2rem;
`
// Nassim TODO:
// 1. just put this entire graphql query inside love-issue.js and pass the content here
// 2. i want to see less hardcoding of multimedia[0], multimedia[1], if it's possible to
// do .map, just do that, u can get subarray through multimedia.slice(start index, end index)
// 3. add a lil bit margin below the author name
// 4. the description for each photo can be a lil bit larger
// 5. the pink text can be a lil bit larger
// 6. change the text to the correct ones
const Multimedia = ({ multimedia }) => (
  <ImageContainer>
    <LoveHeading color="#FDB6B0">{'MULTIMEDIA'}</LoveHeading>
    <BoldText>
      {'Photo essay: Redefining Love In Lockdown'.toUpperCase()}
    </BoldText>
    <RegularText style={{ marginBottom: '1rem' }}>
      From puppies to coffee cups, here’s how Street survived life under
      lockdown.
    </RegularText>
    <NoMarginRow>
      <Col sm={12} md={5}>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[0].title}</p>
            <Author>BY {multimedia[0].author}</Author>
          </Tag>
          <Img fluid={multimedia[0].img.childImageSharp.fluid} />
        </Container>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[1].title}</p>
            <Author>BY {multimedia[1].author}</Author>
          </Tag>
          <Img fluid={multimedia[1].img.childImageSharp.fluid} />
        </Container>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[2].title}</p>
            <Author>BY {multimedia[2].author}</Author>
          </Tag>
          <Img fluid={multimedia[2].img.childImageSharp.fluid} />
        </Container>
      </Col>
      <Col sm={12} md={7}>
        <MobileContainer>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[3].title}</p>
            <Author>BY {multimedia[3].author}</Author>
          </Tag>
          <Img fluid={multimedia[3].img.childImageSharp.fluid} />
        </MobileContainer>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[4].title}</p>
            <Author>BY {multimedia[4].author}</Author>
          </Tag>
          <Img fluid={multimedia[4].img.childImageSharp.fluid} />
        </Container>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[5].title}</p>
            <Author>BY {multimedia[5].author}</Author>
          </Tag>
          <Img fluid={multimedia[5].img.childImageSharp.fluid} />
        </Container>
      </Col>
    </NoMarginRow>
    <NoMarginRow>
      <Col sm={12} md={4}>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[6].title}</p>
            <Author>BY {multimedia[6].author}</Author>
          </Tag>
          <Img
            fluid={multimedia[6].img.childImageSharp.fluid}
            style={{ height: '500px' }}
          />
        </Container>
      </Col>
      <Col sm={12} md={4}>
        <MobileContainer>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[7].title}</p>
            <Author>BY {multimedia[7].author}</Author>
          </Tag>
          <Img
            fluid={multimedia[7].img.childImageSharp.fluid}
            style={{ height: '500px' }}
          />
        </MobileContainer>
      </Col>
      <Col sm={12} md={4}>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[8].title}</p>
            <Author>BY {multimedia[8].author}</Author>
          </Tag>
          <Img
            fluid={multimedia[8].img.childImageSharp.fluid}
            style={{ height: '500px' }}
          />
        </Container>
      </Col>
    </NoMarginRow>
    <NoMarginRow>
      <Col sm={12} md={5}>
        <Container>
          <Tag>
            <p style={{ marginBottom: '0.2rem' }}>{multimedia[9].title}</p>
            <Author>BY {multimedia[9].author}</Author>
          </Tag>
          <Img fluid={multimedia[9].img.childImageSharp.fluid} />
        </Container>
      </Col>
      <Col sm={12} md={7}>
        <BoxedText>
          <p>
            While none of us could have anticipated the effects that the advent
            of COVID-19 would have on our society, the hardships and grief of
            life under lockdown have certainly been felt by all of us. Seperated
            from our loved ones and facing a future full of uncertainty,
            quarantine has pushed us to find new ways to cope with our so-called
            "new normal".
          </p>
          <p>
            Street welcomed staffers to submtit photos of the things that
            brought them a sense of peace during this time. From snuggling with
            pets to exploring a new hobby, here are a few tidbits of positivity
            that helped our staff survive the past year.
          </p>
        </BoxedText>
      </Col>
    </NoMarginRow>
  </ImageContainer>
)

export default Multimedia
