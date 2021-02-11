import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { FUTURA_REGULAR } from '../../../styles/font'
import { Tag, Author, LoveHeading, BoldText, RegularText } from './shared.js'
import { StyledAnchor } from '../../shared/Typography'

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

const Multimedia = ({ multimedia }) => (
  <ImageContainer>
    <LoveHeading color="#FDB6B0">MULTIMEDIA</LoveHeading>
    <BoldText>
      {'Photo essay: Redefining Love In Lockdown'.toUpperCase()}
    </BoldText>
    <RegularText style={{ marginBottom: '1rem' }}>
      From puppies to coffee cups, here’s how Street survived life under
      lockdown.
    </RegularText>
    <NoMarginRow>
      <Col sm={12} md={5}>
        {multimedia.slice(0, 3) &&
          multimedia.slice(0, 3).map(article => (
            <StyledAnchor link={article.link}>
              <Container>
                <Tag>
                  <p style={{ marginBottom: '0.2rem' }}>{article.title}</p>
                  <Author>BY {article.author}</Author>
                </Tag>
                <Img fluid={article.img.childImageSharp.fluid} />
              </Container>
            </StyledAnchor>
          ))}
      </Col>
      <Col sm={12} md={7}>
        <StyledAnchor link={multimedia[3].link}>
          <MobileContainer>
            <Tag>
              <p style={{ marginBottom: '0.2rem' }}>{multimedia[3].title}</p>
              <Author>BY {multimedia[3].author}</Author>
            </Tag>
            <Img fluid={multimedia[3].img.childImageSharp.fluid} />
          </MobileContainer>
        </StyledAnchor>
        {multimedia.slice(4, 6) &&
          multimedia.slice(4, 6).map(article => (
            <StyledAnchor link={article.link}>
              <Container>
                <Tag>
                  <p style={{ marginBottom: '0.2rem' }}>{article.title}</p>
                  <Author>BY {article.author}</Author>
                </Tag>
                <Img fluid={article.img.childImageSharp.fluid} />
              </Container>
            </StyledAnchor>
          ))}
      </Col>
    </NoMarginRow>
    <NoMarginRow>
      {multimedia.slice(6, 9) &&
        multimedia.slice(6, 9).map(article => (
          <Col sm={12} md={4}>
            <StyledAnchor link={article.link}>
              <Container>
                <Tag>
                  <p style={{ marginBottom: '0.2rem' }}>{article.title}</p>
                  <Author>BY {article.author}</Author>
                </Tag>
                <Img
                  fluid={article.img.childImageSharp.fluid}
                  style={{ height: '500px' }}
                />
              </Container>
            </StyledAnchor>
          </Col>
        ))}
    </NoMarginRow>
    <NoMarginRow>
      <Col sm={12} md={5}>
        <StyledAnchor link={multimedia[9].link}>
          <Container>
            <Tag>
              <p style={{ marginBottom: '0.2rem' }}>{multimedia[9].title}</p>
              <Author>BY {multimedia[9].author}</Author>
            </Tag>
            <Img fluid={multimedia[9].img.childImageSharp.fluid} />
          </Container>
        </StyledAnchor>
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
