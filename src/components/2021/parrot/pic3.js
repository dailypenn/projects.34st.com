import React from 'react'
import s from 'styled-components'

import { BN_CHESTER_REGULAR } from '../../../styles/font'

const ShadeBg = s.div`
  width: 100%;
  background-size: cover;
  background-color: ${({ bgColor = 'white' }) => bgColor};
`

const Quote = s.div`
  padding-top: 5rem;
  width: 70%;
  margin: auto;
  color: white;
  font-size: 4.5rem;
  ${BN_CHESTER_REGULAR}
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
  padding: 5rem 0 5rem;
  ${BN_CHESTER_REGULAR}

  @media(max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem 2rem;
    width: 100%;
  }
`

const Pic3 = ({ author, bgColor, color, quote }) => (
  <ShadeBg bgColor={bgColor}>
    <Quote>{quote}</Quote>
    <QuoteAuthor>&#8211; {author}</QuoteAuthor>
  </ShadeBg>
)

export default Pic3
