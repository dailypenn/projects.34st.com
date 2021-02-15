import React from 'react'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const ShadeBg = s.div`
  width: 100%;
  background-size: cover;
  background-color: rgba(0, 0, 0, .66);
`
const Quote = s.div`
  padding-top: 15rem;
  font-weight: bold;
  width: 70%;
  margin: auto;
  color: white;
  font-size: 4.5rem;
  @media(max-width: 768px) {
    font-size: 1.5rem;
    padding: 4rem 2rem 0;
    width: 100%;
  }
`
const QuoteAuthor = s.div`
  width: 50%;
  text-align: right;
  margin: auto;
  color: white;
  font-size: 2.5rem;
  padding: 5rem 0 10rem;
  @media(max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem 2rem;
    width: 100%;
  }
`

const Pic3 = ({json: {img, quote, author}}) => (
    <BackgroundImage fluid={img.childImageSharp.fluid}>
        <ShadeBg>
            <Quote>{quote}</Quote>
            <QuoteAuthor>&#8211; {author}</QuoteAuthor>
        </ShadeBg>
    </BackgroundImage>
)

export default Pic3