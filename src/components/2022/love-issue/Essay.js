import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { FUTURA_BOLD } from '../../../styles/font'
import { StyledAnchor } from '../../shared/Typography'
import { Container, Tag, Author, LoveHeading } from './shared.js'

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const EssayCarousel = ({ articles, deviceType, headerColor="#FDB6B0" }) => (
  <>
    <div style={{ margin: '0 2rem' }}>
      <LoveHeading color={headerColor}>Essay Winners</LoveHeading>
    </div>
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
      {articles &&
        articles.map(article => (
          <StyledAnchor link={article.published_link}>
            <Container>
              <Tag>
                <Badge backgroundColor={article.color}>{article.award_tag}</Badge>
                <p style={{ marginTop: '0.2rem', marginBottom: '0.2rem', fontSize: '1.1rem' }}>{article.title}</p>
                <Author>BY {article.author}</Author>
              </Tag>
              <Img fluid={article.img.childImageSharp.fluid} />
            </Container>
          </StyledAnchor>
        ))}
    </Carousel>
  </>
)

export default EssayCarousel
