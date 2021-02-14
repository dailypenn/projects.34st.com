import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
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
    padding: 1rem 2rem;
    width: 100%;
  }
`
const Credit = s.div`
  color: white;
  font-size: 0.5rem;
  width: 100%;
  text-align: right;
  padding: 1rem;
`

const Pic1 = ({ section: {img, quote, author, credit}}) => (
  <BackgroundImage fluid={img.childImageSharp.fluid}>
    <ShadeBg>
        <Quote>{quote}</Quote>
        <QuoteAuthor>&#8211; {author}</QuoteAuthor>
        <Credit>{credit}</Credit>
    </ShadeBg>
  </BackgroundImage>
)

export default Pic1