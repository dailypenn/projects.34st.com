import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import {Hornblum, MainPara, CounterRowMargin, ImgCaption, CenterDiv} from './Shared.js'

const YusufImgCol = s.div`
    @media (max-width: 992px) {
        padding-top: 3rem;
    }
    padding-left: 2.5rem;
`

const Section5 = ({json}) => (
    <>
        <Hornblum>
            <CounterRowMargin>
                <Row style={{padding: "5rem 4rem 5rem 4rem"}}>
                    <Col md={7}>
                        <MainPara>For decades, the Holmesburg Prison experiments have been one of Penn's darkest open secrets.</MainPara>
                        <MainPara>In 1990, formerly incarcerated study participant Edward Farrington <a target="_blank" href="https://www.thedp.com/article/1990/11/citys-suit-response-points-finger-at-u">sued</a> the city of Philadelphia, Holmesburg, and Penn, claiming he developed leukemia from the radioactive injections that he received at the prison. Farrington claimed that University researchers "enticed" him into participating in the study, assuring him that there would be no long-term consequences. Two years later, the lawsuit was settled. The University denied Farrington's allegations and made no admission of guilt in the process of the settlement.</MainPara>
                        <MainPara>Penn's response was to offer "silence or a very boilerplate statement and hope the whole thing just went away," says Jeremy Kahn (C '96), a reporter for <i>The Daily Pennsylvanian</i> who covered the Kligman story in the 1990s.</MainPara>
                        <MainPara>In 1998, Allen Hornblum published <i>Acres of Skin</i>, his groundbreaking book on Kligman which drew attention to the issue that had largely gone unaddressed in Penn's history. In response to the book, the University said in a <a target="_blank" href="https://www.thedp.com/article/2002/09/inmate_lawsuit_against_university_thrown_out">statement</a> that, "to the best of [Kligman's] knowledge, the result of those experiments advanced our knowledge of the pathogenesis of skin disease, and no long-term harm was done to any person who voluntarily participated in the research program." Subsequently, the University offered free medical care for formerly incarcerated participants with lasting injuries, but <a target="_blank" href="https://www.thedp.com/article/2002/09/inmate_lawsuit_against_university_thrown_out">few</a> ever stepped forward.</MainPara>
                        <MainPara>In 2000, 298 <a target="_blank" href="https://dparchives.library.upenn.edu/?a=d&d=tdp20001020-01.2.9&srpos=1&e=-------en-20--1--txt-txIN-298+inmates------">former study participants</a> sued Kligman, Penn, the city of Philadelphia, Dow Chemical, and Johnson & Johnson for exposing them to "infectious diseases, radioactive isotopes, and psychotic drugs such as LSD without having given informed consent." The men alleged that their consent was in fact coerced, as experimenters leveraged money over their heads and failed to accurately disclose possible health consequences. The case was thrown out in 2002. The statute of limitations for the participants' charges had passed.</MainPara>
                        <MainPara>One year later, a large crowd gathered outside of the Philadelphia College of Physicians. The group, a collection of formerly incarcerated men calling themselves "The Holmesburg Survivors," held handmade signs and chanted protests into a megaphone. As they stood guard outside, Kligman received a lifetime achievement award from the College of Physicians, surrounded by Philadelphia's top doctors.</MainPara>
                    </Col>
                    <Col md={5}>
                        <CenterDiv>
                            <div style={{width: "100%"}}>
                                <Img fluid={json.img1.childImageSharp.fluid} />
                                <ImgCaption>Photo courtesy of Jules Lipoff</ImgCaption>
                                <Img fluid={json.img2.childImageSharp.fluid} />
                                <ImgCaption>Photo courtesy of Jules Lipoff</ImgCaption>
                            </div>
                        </CenterDiv>
                    </Col>
                </Row>
            </CounterRowMargin>
        </Hornblum>
    </>
)

export default Section5

