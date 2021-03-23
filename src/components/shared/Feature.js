import React from 'react'
import s from 'styled-components'

import { FUNKTURM_REGULAR, FUTURA_REGULAR, FUTURA_MEDIUM } from '../../styles/font'
import { StyledAnchor } from '../shared'

const Background = s.div`
  background-color: rgba(0,0,0,.4);
  background-blend-mode: multiply;
  background-image: url(${({ img }) => img});
  width: 100%;
  padding: 3rem;
  background-size: cover;

  @media(max-width: 768px) {
    padding: 3rem 2rem;
  }
`

const FeatureHeading = s.div`
  font-size: 1.7rem;
  text-transform: uppercase;
  border: 2px solid white;
  width: fit-content;
  color: white;
  padding: 0 .4rem;
  ${FUTURA_MEDIUM}
`
const FeatureHeadline = s.div`
  font-size: 5rem;
  line-height: 4rem;
  color: white;
  padding: 20rem 0 1rem 0;
  width: 70%;
  ${FUNKTURM_REGULAR}

  @media(max-width: 768px) {
    font-size: 3rem;
    line-height: 3.8rem;
    width: 100%;
    padding-top: 5rem;
  }
`
const FeatureSubHeading = s.div`
  font-size: 1.7rem;
  color: white;
  line-height: 1.6rem;
  ${FUTURA_REGULAR}
  width: 41%;
  margin-top: 2rem;

  @media(max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
    width: 100%;
  }
`
const Author = s.div`
  font-size: 1.7rem;
  text-transform: uppercase;
  color: white;
  width: fit-content;
  margin: auto;
  text-align: center;
  margin-top: 2.5rem;
  ${FUTURA_REGULAR}

  @media(max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
  }
`

const Feature = ({ link, heading, headline, subheading, author, img }) => (
  <Background img={img}>
    <StyledAnchor link={link}>
      <FeatureHeading>{heading}</FeatureHeading>
      <FeatureHeadline>
        {headline}
      </FeatureHeadline>
      <FeatureSubHeading>
        {subheading}
      </FeatureSubHeading>
      <Author>BY {author}</Author>
    </StyledAnchor>
  </Background>
)

export default Feature
