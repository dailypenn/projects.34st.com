import React from 'react'
import s from 'styled-components'
import InstagramEmbed from 'react-instagram-embed'
import {BoldText, RegularText} from './shared.js'


const Wrapper = s.div`
  margin: 3rem 0;
`

const VidFormat = s.div`
  width: 75%;
  max-width: 658px;
  margin: auto;
  padding-top: 2rem;
  iframe {
    max-width: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem 4rem;
  }
`

const Video = () => (
  <Wrapper>
    <BoldText>VIDEO</BoldText>
    <RegularText>
      It's Not You, It's COVID–19: Meet the Couples
      <br />
      Street sat down with two couples to learn more about their relationships,
      and how they had to change once Penn shut down last March.
    </RegularText>
    <BoldText>By Jesse Zhang</BoldText>
    <VidFormat>
      <InstagramEmbed
        url="https://www.instagram.com/tv/CLFpqaej4jH/?utm_source=ig_web_copy_link"
        clientAccessToken="947756802416627|a36b8dffc1596399ee685a4677ebc2a2"
        maxWidth={658}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      />
    </VidFormat>
  </Wrapper>
)
export default Video
