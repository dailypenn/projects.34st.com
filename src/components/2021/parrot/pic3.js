import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


const JulesBgImg = s.div`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    padding-top: 15rem;
    padding-bottom: 15rem;
    background-color: rgba(0, 0, 0, .66);
`

const ShadeBgTitle = s.h3`
    color: white;
    font-size: 3.3rem;
`
const QuoteAuthor = s.h5`
    color: white;
    font-size: 1.8rem;
`

const Pic3 = ({json}) => (
    <>
        <BackgroundImage fluid={json.img.childImageSharp.fluid}>
            <JulesBgImg>
                <ShadeBgTitle>"It is really important that we honestly acknowledge our history and our historical figures for all of their great accomplishments, and for all of their flaws."</ShadeBgTitle>
                <QuoteAuthor>&#8211; Jules Lipoff &nbsp; &nbsp; &nbsp;</QuoteAuthor>
            </JulesBgImg>
        </BackgroundImage>
    </>
)

export default Pic3