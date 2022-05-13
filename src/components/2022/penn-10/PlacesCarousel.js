import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { FUTURA_BOLD, FUTURA_REGULAR, COOPER_NOUVEAU, BOOKMANIA } from '../../../styles/font'
import { StyledAnchor } from '../../shared/Typography'
import { BoxedHeading } from './shared'

export const Badge = s.span`
  background-color: ${({ backgroundColor = '#283033' }) => backgroundColor};
  ${FUTURA_BOLD}
  border-radius: 10px;
  width: 3rem;
  color: black;
  font-size: 80%;
  margin-right: 1rem;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
`

export const LoveHeading = s.div`
  width: fit-content;
  padding: .9rem 0.5rem 0 0.5rem;
  margin: 8rem auto 3rem;
  text-align: center;
  font-size: 4rem;
  line-height 4rem;
  border: 3px solid ${({ color = '#283033' }) => color};
  color: ${({ color = '#283033' }) => color};
  ${COOPER_NOUVEAU}

  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
    margin-top: 4rem;
  }
`

export const Container = s.div`
	border: 1px solid #DDDDDD;
    position: relative;
`

export const Tag = s.div` 
	float: left;
	position: absolute;
	left: 0px;
	bottom: 0px;
	z-index: 1000;
	width: 100%;
	height: auto;
	background-color: rgba(0, 0, 0, 0.7);
	color: #FFFFFF;
	font-size: 1.1vw;
	${BOOKMANIA}
  padding: 0.5rem 1rem 1rem 1rem;
	@media (max-width: 768px) {
		font-size: 1.1em;
	}
`
export const Author = s.p`
	${BOOKMANIA}
	// text-transform: uppercase;
	font-size: min(1.2vw, 0.8rem);
	@media (max-width: 768px) {
    font-size: 0.9rem;
  }
  margin-top: 0.75rem;
	margin-bottom: 0.25rem;
`

const ProfileImage = s.div`
  width: 100%;
  // height: min(400px, 40vw);
  height: 100%;
  overflow: hidden;
  // @media(max-width: 768px) {
  //   height: 70vw;
  // }
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 648 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 648, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const PlacesCarousel = ({ places, deviceType, headerColor = "#FDB6B0" }) => (
  <>
    {/* <div style={{ margin: '0 2rem' }}>
      <LoveHeading color={headerColor}>Essay Winners</LoveHeading>
    </div> */}
    <BoxedHeading>Favorite Places</BoxedHeading>
    <Carousel
      draggable={false}
      showDots={true}
      removeArrowOnDeviceType={['desktop']}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={3500}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {places &&
        places.map(place => (
          <StyledAnchor link={place.published_link}>
            <Container>
              <Tag>
                <p style={{ marginTop: '0.2rem', marginBottom: '0.2rem', fontSize: '1.1rem', textTransform: 'uppercase' }}>{place.subject}</p>
                <Author>{place.caption}</Author>
              </Tag>
              <ProfileImage>
                <img src={place.image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}></img>
              </ProfileImage>
            </Container>
          </StyledAnchor>
        ))}
    </Carousel>
  </>
)

export default PlacesCarousel
