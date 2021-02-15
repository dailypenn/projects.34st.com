import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const ImageText = s.p`
    color: white;
    text-align: right;
    margin-bottom: 0;
    font-size: 0.5rem;
`

const ImageDiv = s.div`
    padding: 30rem 15px 15px 0;
    background-color: rgba(0, 0, 0, .66);
    @media(max-width: 768px) {
        padding-top: 15rem;
    }
`

const Pic4 = ({json}) => (
    <>
        <BackgroundImage fluid={json.img.childImageSharp.fluid}>
            <ImageDiv>
                <ImageText>Original photos: Temple University Urban Archives via Chronicle of Higher Education, The Daily Pennsylvanian Archives, and Temple University Archives</ImageText>
                <ImageText>Credit: Isabel Liang</ImageText>
            </ImageDiv>
        </BackgroundImage>
    </>
)

export default Pic4