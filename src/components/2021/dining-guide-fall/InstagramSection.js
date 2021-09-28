import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import InstagramEmbed from 'react-instagram-embed'
import { FUNKTURM_REGULAR } from '../../../styles/font'
import { Heading } from './shared.js'

const Container = s.div`
  width: 100%;
  padding: 0.5rem 2rem 2rem 2rem;
  background-color: #FCFCE2;
  @media(max-width: 768px) {
    padding: 3rem 2rem;
  }
`

const VidFormat = s.div`
  width: 100%;
  margin: auto;
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  iframe {
    max-width: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem 4rem;
  }
`

const InstagramSection = ({ title, links }) => (
  <Container>
    <Heading color="#FFD4C3">{title}</Heading>
    <Row
      style={{
        marginBottom: '3rem',
      }}
    >
      {links &&
          links.map(item =>
            <Col sm={12} md={6} lg={4}>
              <VidFormat>
                <InstagramEmbed
                  url={item.link}
                  clientAccessToken="947756802416627|a36b8dffc1596399ee685a4677ebc2a2"
                  maxWidth={400}
                  hideCaption={false}
                  containerTagName="div"
                  protocol=""
                  injectScript
                />
              </VidFormat>
            </Col>
          )}
    </Row>
  </Container>
)

export default InstagramSection
