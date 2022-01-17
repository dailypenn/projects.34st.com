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
  padding: 0rem 0 1rem 0;
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
  margin-bottom: 1rem;
  border-radius: 40px;
  border-style: solid;
  border-width: 3px;
  border-color: white;
`

const Image2 = s.img`
  width: 100%;
  height: auto;
  padding: 0;
  border-radius: 30px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  margin-bottom: 15px;
`

const Caption = s.p`
  width: 100%; 
  margin: 0 0 2rem 0;
  text-align: right;
  font-size: 0.8rem;
  color: #FFF;
  white-space: pre-line;
  ${LORA_REGULAR}
`

const ContentSection1 = ({ items }) => (
  <Container>
    <RightQuotes items={items.slice(0,2)} textColor="#fff" dashColor="#A38611"/>
    <Image src={ContentImage}/>
    <LeftQuotes items={items.slice(2,5)} textColor="#fff" dashColor="#A38611"/>
    <Row style={{maxWidth: '100%', margin: '3rem 0 3rem 0'}}>
        <Col sm={12} md={1} lg={3}/>
        <Col sm={6} md={5} lg={3}>
            <Image2 src={DrawingImage}/>
            <Caption>Photo courtesy of Sienna Robinson</Caption>
        </Col>
        <Col sm={6} md={5} lg={3}>
            <video width="100%" height="auto" controls style={{marginBottom: '13px'}}>
              <source src={Video} type="video/mp4"/>
            </video>
            <Caption>Video courtesy of Asger Thieden Maarbjerg</Caption>
        </Col>
    </Row>
  </Container>
)

export default ContentSection1
