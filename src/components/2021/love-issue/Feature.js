import React from 'react'
import s from 'styled-components'

import { FUNKTURM_REGULAR, FUTURA_REGULAR } from '../../../styles/font'
import sampleImg from '../../../content/images/2021/love-issue/feature.png'
import { StyledAnchor } from '../../shared'

const Background = s.div`
  background-image: url(${sampleImg});
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
  padding: 0 .4rem;
  ${FUNKTURM_REGULAR}
`
const FeatureHeadline = s.div`
  font-size: 3.6rem;
  line-height: 4rem;
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

const Feature = () => (
  <Background>
    <StyledAnchor link="https://www.34st.com/article/2021/02/dating-covid-quarantine-coronavirus-romance-pawelski">
      <FeatureHeading>FEATURE</FeatureHeading>
      <FeatureHeadline>
        It’s Not You, It’s COVID–19: Finding and Losing Love in Quarantine
      </FeatureHeadline>
      <FeatureSubHeading>
        Penn couples and professors on the challenges of keeping love alive
        during the pandemic.
      </FeatureSubHeading>
      <Author>BY ANGELA SHEN</Author>
    </StyledAnchor>
  </Background>
)

export default Feature
