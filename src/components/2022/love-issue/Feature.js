import React from 'react'
import s from 'styled-components'

import { FUNKTURM_REGULAR, FUTURA_REGULAR, COOPER_NOUVEAU } from '../../../styles/font'
import featureImg from '../../../content/images/2022/love-issue/feature_img.jpeg'
import { StyledAnchor } from '../../shared'

const Background = s.div`
  background-color: rgba(0,0,0,.4);
  background-blend-mode: multiply;
  background-image: url(${featureImg});
  width: 100%;
  padding: 3rem;
  background-size: cover;

  @media(max-width: 768px) {
    padding: 3rem 2rem;
  }
`

const FeatureHeading = s.div`
  font-size: 1.7rem;
  border: 2px solid white;
  width: fit-content;
  color: white;
  padding: .4rem .4rem 0 .4rem;
  ${COOPER_NOUVEAU}
`
const FeatureHeadline = s.div`
  font-size: 3.8rem;
  line-height: 4.1rem;
  color: white;
  padding: 20rem 0 1rem 0;
  width: 41%;
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
  color: white;
  width: fit-content;
  margin: auto;
  text-align: center;
  margin-top: 2.5rem;
  ${FUNKTURM_REGULAR}

  @media(max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
  }
`

const Feature = ({ feature }) => (
  <Background img_link={feature.image_link}>
    <StyledAnchor link={feature.published_link}>
      <FeatureHeading>Feature</FeatureHeading>
      <FeatureHeadline>
        {feature.title}
      </FeatureHeadline>
      <FeatureSubHeading>
        {feature.subhead}
      </FeatureSubHeading>
      <Author>BY {feature.author}</Author>
    </StyledAnchor>
  </Background>
)

export default Feature
