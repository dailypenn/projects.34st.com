import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import InstagramEmbed from 'react-instagram-embed'
import { FUNKTURM_REGULAR } from '../../../styles/font'

const Heading = s.div`
  width: fit-content;
  padding: .5rem 1.2rem;
  margin: 2rem auto 0.2rem;
  text-align: center;
  font-size: 3rem;
  line-height 4rem;
  color: ${({ color = '#283033' }) => color};
  ${FUNKTURM_REGULAR}

  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
    margin-top: 2rem;
  }
`
const Container = s.div`
  width: 100%;
  padding: 3rem;
  background-color: #DDFAF7;
  @media(max-width: 768px) {
    padding: 3rem 2rem;
  }
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

const InstagramSection = ({ title }) => (
  <Container>
    {/* change heading font */}
    <Heading color="#FDB6B0">{title}</Heading>
    <Row
      style={{
        marginBottom: '3rem',
      }}
    >
      <Col md={4}>
        <VidFormat>
          <InstagramEmbed
            url="https://www.instagram.com/p/CLsRQd_Dux_/?igshid=1i2bom0ey9uqz"
            clientAccessToken="947756802416627|a36b8dffc1596399ee685a4677ebc2a2"
            maxWidth={400}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
          />
        </VidFormat>
      </Col>
      <Col md={4}>
        <VidFormat>
          <InstagramEmbed
            url="https://www.instagram.com/p/CLsRQd_Dux_/?igshid=1i2bom0ey9uqz"
            clientAccessToken="947756802416627|a36b8dffc1596399ee685a4677ebc2a2"
            maxWidth={400}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
          />
        </VidFormat>
      </Col>
      <Col md={4}>
        <VidFormat>
          <InstagramEmbed
            url="https://www.instagram.com/p/CLsRQd_Dux_/?igshid=1i2bom0ey9uqz"
            clientAccessToken="947756802416627|a36b8dffc1596399ee685a4677ebc2a2"
            maxWidth={400}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
          />
        </VidFormat>
      </Col>
    </Row>
  </Container>
)

export default InstagramSection
