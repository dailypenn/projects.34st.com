import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { FUNKTURM_REGULAR, FUTURA_REGULAR } from '../../../styles/font'
import sampleImg from '../../../content/images/2021/love-issue/sample.png'

const Background = s.div`
background-image: url(${sampleImg});
  width: 100%;
  padding: 3rem;
`
const FeatureHeading = s.div`
  font-size: 1.7rem;
  border: 2px solid white;
  width: fit-content;
  color: white;
  padding: 0 .4rem;
  ${FUNKTURM_REGULAR};
`
const FeatureHeadline = s.div`
  font-size: 3.6rem;
  color: white;
  padding: 20rem 0 1rem 0;
  width: 41%;
  ${FUNKTURM_REGULAR};
  @media(max-width: 992px) {
    width: 100%;
  }
`
const FeatureSubHeading = s.div`
  font-size: 1.7rem;
  color: white;
  ${FUTURA_REGULAR};
  width: 41%;
  @media(max-width: 992px) {
    width: 100%;
  }
`
const Author = s.div`
  font-size: 1.7rem;
  color: white;
  width: fit-content;
  margin: auto;
  text-align: center;
  padding-top: 1.5rem;
  ${FUNKTURM_REGULAR};
`

const Feature = () => (
  <Background>
    <FeatureHeading>FEATURE</FeatureHeading>
    <FeatureHeadline>FEATURE HEADLINE ABOUT LOVE WILL GO HERE</FeatureHeadline>
    <FeatureSubHeading>Feature subhead about love will go here<br/>Feature subhead about love will go here</FeatureSubHeading>
    <Author>BY BEA FORMAN</Author>
  </Background>
)

export default Feature