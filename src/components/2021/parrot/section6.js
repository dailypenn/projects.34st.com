import React from 'react'
import s from 'styled-components'
<<<<<<< HEAD
import {MainPara} from './Shared.js'
=======
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import {MainPara, Circle} from './Shared.js'
import ReactMarkdown from 'react-markdown'
>>>>>>> cafaee4141cbcebf2519c87fa61f213f069b53af


const SectionWrapper = s.div`
    background-color: #DFDDD0;
    padding: 5rem;
    @media (max-width: 768px) {
        padding: 2rem;
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