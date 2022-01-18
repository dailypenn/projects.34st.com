import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { Footer, NavBar, BackgroundWrapper, Spacer } from '../../components/shared'
import CoverImg from '../../content/images/2022/isolation/isolation_header.jpg'
import BuildingsImg from '../../content/images/2022/isolation/buildings_block.png'

import HeaderSection from '../../components/2022/isolation/HeaderSection'
import TimelineSection from '../../components/2022/isolation/TimelineSection'
import TextSection from '../../components/2022/isolation/TextSection'
import ContentSection1 from '../../components/2022/isolation/ContentSection1'
import ContentSection2 from '../../components/2022/isolation/ContentSection2'
import Divider from '../../components/2022/isolation/Divider'
import DividerLine from '../../components/2022/isolation/DividerLine'
import BottomEmbeds from '../../components/2022/isolation/BottomEmbeds'

const NAVBAR_TITLES = {
  left: [],
  right: [],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { eq: "isolation.json" } }
      ) {
        edges {
          node {
            childrenIsolationJson {
                content
                items {
                    text
                    person
                }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenIsolationJson: sections },
  } = data.allFile.edges[0]
    
  const [timelineContent, content1, content2, content3, content4, content5, quotes] = sections

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Penn 10" />
        <title>Dispatches from Isolation | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Dispatches from Isolation | 34th Street"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn-34s/e61670eb-ff9b-4b62-ae64-cedf6774eaf1.sized-1000x1000.jpg?"
        />
        <meta
          property="og:description"
          content="Confusion. Chaos. Miscommunication. When Penn students test positive for COVID–19, nothing about the isolation process is clear."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2022/isolation"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dispatches from Isolation | 34th Street"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn-34s/e61670eb-ff9b-4b62-ae64-cedf6774eaf1.sized-1000x1000.jpg?"
        />
        <meta
          name="twitter:description"
          content="Confusion. Chaos. Miscommunication. When Penn students test positive for COVID–19, nothing about the isolation process is clear."
        />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2022/isolation"
        />
        <meta name="twitter:site" content="@dailypenn" />

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <BackgroundWrapper color="#fff">

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#13131B"
        fontColor="#FFFFFF"
        img="/img/2021/parrot/watermark.png"
      />

      <div>
        <img
          src={CoverImg}
          style={{ width: '100%', boxShadow: '0px 5px 6px #00000029' }}
        />
      </div>

      <HeaderSection title={"Dispatches from Isolation"} authors={"Meg Gladieux and Mira Sydow"} subhead={"Confusion. Chaos. Miscommunication. When Penn students test positive for COVID–19, nothing about the isolation process is clear."}/>

      <TimelineSection content={timelineContent.content}/>

      <div style={{backgroundColor:"#35354B", padding: '0rem 0 2rem 0'}}>
        <img
          src={BuildingsImg}
          style={{ width: '100%', boxShadow: '0px 5px 6px #00000029' }}
        />
      </div>

      <TextSection content={content1.content} backgroundColor="#35354B"/>

      <Divider color="#fff" backgroundColor="#35354B"/>

      <TextSection content={content2.content} backgroundColor="#35354B"/>

      <ContentSection1 items={quotes.items.slice(0,3)}></ContentSection1>

      <TextSection content={content3.content} backgroundColor="#A38611"/>

      <Divider color="#333" backgroundColor="#A38611"/>

      <TextSection content={content4.content} backgroundColor="#A38611"/>

      <ContentSection2 items={quotes.items.slice(3,6)}></ContentSection2>

      <TextSection content={content5.content} backgroundColor="#35354B"/>

      <BottomEmbeds/>

      <Footer emoji="😷" bgColor="#13131B" fontColor="#fff" year="2022"/>

      </BackgroundWrapper>
    </>
  )
}

export default Index
