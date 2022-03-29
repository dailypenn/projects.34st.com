import React from 'react'
import s from 'styled-components'
import InstagramEmbed from 'react-instagram-embed'
import { BoldText, RegularText } from './shared.js'
import { PEACHY_KEEN } from '../../../styles/font.js'

const Wrapper = s.div`
  margin: 3rem 0;
`

const VidFormat = s.div`
  width: 65%;
  max-width: 658px;
  margin: auto;
  padding-top: 2rem;
  // max-width: max(400px, 65%);
  iframe {
    max-width: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem 4rem;
  }
`

const Heading = s.div`
  width: fit-content;
  padding: 0.5rem;
  margin: 8rem auto 3rem;
  text-align: center;
  font-size: 4rem;
  line-height 4rem;
  border: 3px solid #019676;
  color: ${({ color = '#019676' }) => color};
  ${PEACHY_KEEN}

  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
    margin-top: 4rem;
  }
`

const Multimedia = ({ multimedia }) => (
  <Wrapper>
    <Heading>Multimedia</Heading>
    <BoldText>
      {multimedia.title}
    </BoldText>
    {/* <BoldText>By </BoldText> */}
    <VidFormat>
      <InstagramEmbed
        url={multimedia.link}
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
export default Multimedia
