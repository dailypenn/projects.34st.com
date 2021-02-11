import React, { useState } from 'react'
import Img from 'gatsby-image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { Container, Tag, Author, LoveHeading } from './shared.js'

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

// Nassim TODO:
// 1. follow the wireframe and add the 1st, 2nd, and 3rd badges
// u can refer to this code https://github.com/dailypenn/tech.thedp.com/blob/master/src/components/badge.js
// 2. change this to arrow function, u did it in Multimedia.js, it's the same thing. And if u don't need isShow, just delete it
// 3. add links to all of the articles, search StyledAnchor for examples on how to use it

function EssayCarousel(props) {
  const [isShow] = useState(true)

  return (
    <>
      <div style={{ margin: '0 2rem' }}>
        <LoveHeading color="#FDB6B0">{'ESSAY WINNERS'}</LoveHeading>
      </div>
      <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={3500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {props.articles &&
          props.articles.map(article => (
            <Container>
              <Tag>
                <p style={{ marginBottom: '0.2rem' }}>{article.title}</p>
                <Author>BY {article.author}</Author>
              </Tag>
              <Img fluid={article.img.childImageSharp.fluid} />
            </Container>
          ))}
      </Carousel>
    </>
  )
}

export default EssayCarousel
