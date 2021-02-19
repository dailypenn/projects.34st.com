import React from 'react'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { BN_CHESTER_REGULAR, LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'

const Title = s.div`
  padding: 0 8rem;
  ${BN_CHESTER_REGULAR}
  @media(max-width: 768px) {
    padding: 0 2rem;
  }
`
const BlackBgShade = s.div`
  background-color: rgba(0, 0, 0, .66);
`
const Watermark = s.div`
  opacity: 75%;
  width: 20%;
  padding: 2rem 0 20rem;
  margin: auto;
  @media(max-width: 768px) {
    padding: 1rem 0 3rem;
    width: 40%;
  }
`
const Header = s.div`
  font-size: 6rem;
  color: white;
  @media(max-width: 768px) {
    font-size: 2.5rem;
  }
`
const Subheader = s.div`
  font-size: 10rem;
  color: white;
  line-height: 120%;
  @media(max-width: 768px) {
    font-size: 2rem;
  }
`
const CoverText = s.div`
  padding: 20rem 0 10rem;
  width: 45%;
  margin: auto;
  text-align: center;
  color: white;
  @media(max-width: 768px) {
    padding: 3rem 1rem;
    width: 100%
  }
`
const Description = s.div`
  font-size: 2rem;
  ${LIBRE_FRANKLIN_MEDIUM}
  @media(max-width: 768px) {
    font-size: 1rem;
  }
`
const Author = s.div`
  font-size: 2rem;
  ${LIBRE_FRANKLIN_MEDIUM}
  padding-top: 6rem;
  @media(max-width: 768px) {
    font-size: 0.8rem;
    padding-top: 1rem;
  }
`
const Caption = s.div`
  font-size: 0.5rem;
  color: white;
  padding: 0 1rem 1rem;
`

const DomSection = ({
  section: { header, subheader, description, author, caption, credit, img }
}) => (
  <BackgroundImage fluid={img.childImageSharp.fluid}>
    <BlackBgShade>
      <Watermark>
        <img src="/img/2021/parrot/watermark.png" class="img-fluid" />
      </Watermark>
      <Title>
        <Header>{header}</Header>
        <Subheader>{subheader}</Subheader>
      </Title>
      <CoverText>
        <Description>{description}</Description>
        <Author>{author.toUpperCase()}</Author>
      </CoverText>
      <Caption>
        {caption}
        <br />
        Credit: {credit}
      </Caption>
    </BlackBgShade>
  </BackgroundImage>
)

export default DomSection
