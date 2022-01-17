import React from 'react'
import s from 'styled-components'

import { Col, Row } from 'react-bootstrap'

import LeftQuotes from './LeftQuotes'
import RightQuotes from './RightQuotes'

import ContentImage1 from '../../../content/images/2022/isolation/IMG_4213.jpeg'
import ContentImage2 from '../../../content/images/2022/isolation/IMG_4222.jpeg'
import ContentImage3 from '../../../content/images/2022/isolation/IMG_4231.jpeg'

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
  margin-bottom: 1rem;
  padding: 0;
  border-radius: 40px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  @media(max-width: 768px) {
    height: max(350px, 30vw);
  }
`

const ContentSection2 = ({ items }) => (
  <Container>
    <Image src={ContentImage1}/>
    <LeftQuotes items={items.slice(0,1)} textColor="#fff" dashColor="#35354B"/>
    <Image src={ContentImage2}/>
    <RightQuotes items={items.slice(1,2)} textColor="#fff" dashColor="#35354B"/>
    <Image src={ContentImage3}/>
    <LeftQuotes items={items.slice(2,3)} textColor="#fff" dashColor="#35354B"/>
  </Container>
)

export default ContentSection2
