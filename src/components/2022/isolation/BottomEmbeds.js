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
  width: 100%;
  height: auto;
  padding: 0;
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

const BottomEmbeds = () => (
  <Container>
    <Row style={{maxWidth: '100%', margin: '3rem 0 3rem 0'}}>
        <Col sm={12} md={1} lg={3}/>
        <Col sm={6} md={5} lg={3}>
            <Image src={DrawingImage}/>
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

export default BottomEmbeds
