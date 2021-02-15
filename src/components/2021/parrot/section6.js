import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import {MainPara, Circle} from './Shared.js'
import ReactMarkdown from 'react-markdown'


const SectionWrapper = s.div`
    background-color: #DFDDD0;
    padding: 5rem 3.9rem 5rem 5.9rem;
    @media (max-width: 992px) {
        padding: 2rem 2rem;
    }
`

const Pic4 = ({json: {content}}) => (
    <>
        <SectionWrapper>
            {content &&
                content.map(para => (
                    (para == "circle") ? 
                    <Circle>&#9899; &nbsp; &#9899; &nbsp; &#9899;</Circle> : <MainPara><ReactMarkdown>{para}</ReactMarkdown></MainPara>  
                ))
            }    
        </SectionWrapper>
    </>
)

export default Pic4