import React from 'react'
import s from 'styled-components'

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
  color: white;
  padding: 0 1rem 1rem;
`

const DomSection = ({ section: {header, subheader, description, author, caption, credit, img}}) => (
  <BackgroundImage img={img}>
    <BlackBgShade>
    <Watermark>
      <img src="/img/2021/parrot/watermark.png" class="img-fluid"/>
    </Watermark>
    <Title>
      <Header>{header}</Header>
      <Subheader>{subheader}</Subheader>
    </Title>
    <CoverText>
        <Description>{description}</Description>
        <Author>BY {author.toUpperCase()}</Author>
    </CoverText>
    <Caption>{caption}<br/>Credit: {credit}</Caption>
    </BlackBgShade>
  </BackgroundImage>
)

export default DomSection