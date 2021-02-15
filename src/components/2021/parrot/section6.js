import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import {MainPara} from './Shared.js'


const SectionWrapper = s.div`
    background-color: #DFDDD0;
    padding: 5rem 3.9rem 5rem 5.9rem;
    @media (max-width: 992px) {
        padding: 3rem 3rem;
    }
`

const Pic4 = ({json}) => (
    <>
        <SectionWrapper>
            <MainPara>At the protest, former study <a target="_blank" href="https://www.thedp.com/article/2003/10/research_subjects_protest_prof">participant</a> Anthony Edwards told the <i>DP</i>, "They coerced us &#8211; 85% were Black and functional illiterate &#8211; to believe that tests were safe ... [Kligman] owes us a debt."</MainPara>
            <MainPara>Marc Ackerman (D '98), Jim Ackerman's son, remembers the night vividly. It was the night he was inducted into the College of Physicians as a fellow. Marc says that the doctors at the ceremony were more annoyed by the inconvenience of the protest than appalled by the accusations weighted against Kligman, the evening's honoree.</MainPara>
        </SectionWrapper>
    </>
)

export default Pic4