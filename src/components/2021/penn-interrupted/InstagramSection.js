import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import InstagramEmbed from 'react-instagram-embed'
import { AGRANDIR_TEXTBOLD, AGRANDIR_REGULAR } from '../../../styles/font'

const Container = s.div`
  width: 100%;
  padding-top: 3rem;
  background-color: #05260D;
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

const HeadingWrapper = s.div`
  width: 100%;
  padding: 1rem 0 0.4rem 0;
  margin: 0 0 8rem 0;
  text-align: center;
  font-size: 3rem;
  line-height 3rem;
  text-transform: uppercase;
  color: #111;
  background-color: #F8B3AE;
  white-space: nowrap;
  overflow: hidden;
  ${AGRANDIR_TEXTBOLD}
`

const SubheadingWrapper = s.div` 
	width: 100%;
	height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

const Subheading = s.div` 
	z-index: 1000;
	height: auto;
	color: #DFDA00;
	font-size: min(32px, 3vw);
  line-height: min(44px, 3.5vw);
  width: 85%;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 3rem 0;
    font-size: 21px;
    line-height: 30px;
  }
	${AGRANDIR_REGULAR}
`

const InstagramSection = ({ title, link, subhead }) => (
  <Container>
    <HeadingWrapper>{title}</HeadingWrapper>
    <Row style={{margin: '0'}}>
      <Col sm={12} md={6} lg={6}>
        <SubheadingWrapper>
          <Subheading>{subhead}</Subheading>
        </SubheadingWrapper>
      </Col>
      <Col sm={12} md={5} lg={5}>
        <VidFormat>
          <InstagramEmbed
            url={link}
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
