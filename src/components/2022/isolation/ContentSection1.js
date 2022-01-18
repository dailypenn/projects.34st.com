import React from 'react'
import s from 'styled-components'

import { Col, Row } from 'react-bootstrap'

import LeftQuotes from './LeftQuotes'
import RightQuotes from './RightQuotes'

import ContentImage from '../../../content/images/2022/isolation/IMG_4240.jpeg'
import DrawingImage from '../../../content/images/2022/isolation/sienna_robinson_drawing.jpeg'
import Video from '../../../content/images/2022/isolation/video.mp4'

import { LORA_REGULAR, LORA_MEDIUM, LORA_BOLD } from '../../../styles/font'

const Container = s.div`
  width: 100vw;
  padding: 1rem 0 1rem 0;
  background-color: #35354B;
`

const Image = s.img`
  width: auto;
  height: max(500px, 40vw);
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 3rem;
`

const Caption = s.p`
  width: 100%; 
  margin: 0 0 0.5rem 1rem;
  font-size: 1rem;
  font-style: italic;
  color: #FFF;
  ${LORA_REGULAR}
`

const ContentSection1 = ({ items }) => (
  <Container>
    <Image src={ContentImage}/>
    <RightQuotes items={items.slice(0,2)} textColor="#fff" dashColor="#A38611"/>
    <LeftQuotes items={items.slice(2,5)} textColor="#fff" dashColor="#A38611"/>
    <Caption>Note: the quotes above have been edited and condensed.</Caption>
  </Container>
)

export default ContentSection1
