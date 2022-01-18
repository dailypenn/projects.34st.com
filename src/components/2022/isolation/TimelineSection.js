import React from 'react'
import s from 'styled-components'
import { LORA_REGULAR, LORA_MEDIUM, LORA_BOLD } from '../../../styles/font'
import { Chrono } from "react-chrono";
import { Col, Row } from 'react-bootstrap'

import TimelineImg from '../../../content/images/2022/isolation/isolation_timeline.png'

const Container = s.div`
  width: 100vw;
  padding: 3rem 0 2rem 0;
  background-color: #13131B;
`

const HeadingWrapper = s.div`
  width: 100%;
  padding: 1rem 3rem 0.4rem 3rem;
  margin: 0 0.1rem 1.6rem 0;
  text-align: right;
  font-size: 5rem;
  line-height 5rem;
  color: #942918;
  ${LORA_MEDIUM}
`

const TimelineText = s.p` 
  margin: 0;
  padding: 1rem 2rem 1rem 3rem;
  text-align: left;
  font-size: 1.2rem;
  line-height 1.4rem;
  color: #FFF;
  white-space: pre-line;
  ${LORA_REGULAR}
`

const TimelineImage = s.img`
  width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`

const items = [
    {
        cardTitle: "Day 1",
        cardDetailedText: [
            "\u2022 Get tested for COVID–19",
            "\u2022 Receive a red PennOpen Pass",
            "(Maneuver around the Open Pass site until you realize this means you tested positive)",
            "(Call the Open Pass office and get transferred four different times)"
        ]
    },
    {
        cardTitle: "Day 2",
        cardDetailedText: [
            "\u2022 Get a call from Residential Services about next steps",
            "(They say it won’t take more than 20 minutes, but it’ll take over an hour)",
            "\u2022 Retrace your steps for Residential Services contact tracers",
            "(Send frantic texts to everyone you’ve seen in the past few days, tell them they may have been exposed)",
            "(Some of them will be Red Passed, seemingly at random)",
            "\u2022 Receive an email assigning you to isolation housing",
            "(Misunderstand the subject of the email and mark it as Spam, don’t read it until you receive an SHS message a day later)"
        ]
    },
    {
        cardTitle: "Day 3",
        cardDetailedText: [
            "\u2022 Go into isolation",
            "(Go on four walks a day just to maintain your sanity)"
        ]
    },
    {
        cardTitle: "Day 5",
        cardDetailedText: [
            "\u2022 Suffer full-body aches, splitting migraines, chills",
            "(Fend off calls from your mother, who wants to hospitalize you)"
        ]
    },
    {
        cardTitle: "Day 6",
        cardDetailedText: [
            "\u2022 Get random calls from SHS to “check-in”",
            "(They’ll stop checking in after a few days, you’ll wonder whether if you suddenly died, anyone would know)"
        ]
    },
    {
        cardTitle: "Day 7",
        cardDetailedText: [
            "\u2022 Take your finals online",
            "(Desperately negotiate through email so you don’t have to take them in the Spring)"
        ]
    },
    {
        cardTitle: "Day 9",
        cardDetailedText: [
            "\u2022 Order Instacart",
            "(A daily routine by the last half of isolation, you learn to not bother with the delivered food from Penn Dining)"
        ]
    },
    {
        cardTitle: "Day 10",
        cardDetailedText: [
            "\u2022 Get out of isolation",
            "(FREEDOM AT LAST)",
        ]
    }
];  

const TimelineSection = ({ content }) => (
  <Container>
    <HeadingWrapper>{'Timeline'}</HeadingWrapper>
    <Row style={{maxWidth: '100%'}}>
        <Col sm={12} md={6} lg={6}>
            <TimelineText>{content}</TimelineText>
        </Col>
        <Col sm={12} md={6} lg={6}>
            {/* <Chrono
                items={items}
                mode="VERTICAL"
                flipLayout={true}
                useReadMore={false}
                hideControls
                cardHeight={50}
                theme={{
                    primary: "#FFF",
                    secondary: "#A38611",
                    cardBgColor: "#35354B",
                    cardForeColor: "#FFF"
                }}
            /> */}
            <TimelineImage src={TimelineImg}/>
        </Col>
    </Row>
  </Container>
)

export default TimelineSection