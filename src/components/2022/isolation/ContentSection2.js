import React from 'react'
import s from 'styled-components'

import { Col, Row } from 'react-bootstrap'

import LeftQuotes from './LeftQuotes'
import RightQuotes from './RightQuotes'

import ContentImage1 from '../../../content/images/2022/isolation/IMG_4213.jpeg'
import ContentImage2 from '../../../content/images/2022/isolation/IMG_4222.jpeg'
import ContentImage3 from '../../../content/images/2022/isolation/IMG_4231.jpeg'

import { LORA_REGULAR, LORA_MEDIUM, LORA_BOLD } from '../../../styles/font'

const Container = s.div`
  width: 100vw;
  padding: 3rem 0 1rem 0;
  background-color: #A38611;
`

const Image = s.img`
  width: auto;
  height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding: 0;
  @media(max-width: 768px) {
    height: auto;
    width: 80%;
  }
`

const Caption = s.p`
  width: 100%; 
  margin: 0 0 0.5rem 1rem;
  font-size: 1rem;
  font-style: italic;
  color: #FFF;
  ${LORA_REGULAR}
`

const ContentSection2 = ({ items }) => (
  <Container>
    <Image src={ContentImage1}/>
    <LeftQuotes items={items.slice(0,1)} textColor="#fff" dashColor="#35354B"/>
    <Image src={ContentImage2}/>
    <RightQuotes items={items.slice(1,2)} textColor="#fff" dashColor="#35354B"/>
    <Image src={ContentImage3}/>
    <LeftQuotes items={items.slice(2,3)} textColor="#fff" dashColor="#35354B"/>
    <Caption>Note: the quotes above have been edited and condensed.</Caption>
  </Container>
)

export default ContentSection2
