import React from 'react'
import s from 'styled-components'

import { FUTURA_BOLD, FUTURA_MEDIUM } from '../../../styles/font'

const Wrapper = s.div`
  margin: 3rem 0;
`

const VidFormat = s.div`
  width: 75%;
  margin: auto;
  padding-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem 4rem;
  }
`
const Vid = s.iframe`
  height: 700px;

  @media (max-width: 768px) {
    height: 200px;
  }
`

const BoldText = s.div`
  font-size: 1.7rem;
  ${FUTURA_BOLD}
  text-align: center;
  margin: auto;
  max-width: 75%;

  @media(max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    padding: 0 1rem;
  }
`

const RegularText = s.div`
  font-size: 1.2rem;
  ${FUTURA_MEDIUM}
  text-align: center;
  max-width: 75%;
  margin: auto;
  padding: 1.5rem 0;

  @media(max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    padding: 0.5rem 1rem;
  }
`

const Video = () => (
  <Wrapper>
    <BoldText>VIDEO</BoldText>
    <RegularText>
      Something cool about the photo essay will go here Something cool about the
      photo essay will go here Something cool about the photo essay will go here
      Something cool about the photo essay will go here
    </RegularText>
    <BoldText>By Kylie Cooper</BoldText>
    <VidFormat>
      <Vid
        width="100%"
        src="https://www.youtube.com/embed/qxklB93jWhs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </VidFormat>
  </Wrapper>
)
export default Video
