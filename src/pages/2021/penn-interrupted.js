import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar, BackgroundWrapper, Spacer } from '../../components/shared'
import CoverImg from '../../content/images/2021/penn-interrupted/webheader-01.png'
import Feature from '../../components/2021/penn-interrupted/Feature'
import InstagramSection from '../../components/2021/penn-interrupted/InstagramSection'
import ArticleGrid from '../../components/2021/penn-interrupted/ArticleGrid'
import ArticleGridMajorLeft from '../../components/2021/penn-interrupted/ArticleGridMajorLeft'
import ArticleGridMajorRight from '../../components/2021/penn-interrupted/ArticleGridMajorRight'

const NAVBAR_TITLES = {
  left: [
    { text: 'FEATURE', link: 'feature' },
    { text: 'INSTAGRAM', link: 'instagram' },
    { text: 'FINDING OUR VOICE', link: 'finding-our-voice' },
  ],
  right: [
    { text: 'FINDING OUR PLACE', link: 'finding-our-place' },
    { text: 'FINDING OUR POWER', link: 'finding-our-power' },
    { text: 'FINDING OURSELVES', link: 'finding-ourselves' },
  ],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { eq: "penn-interrupted-2021.json" } }
      ) {
        edges {
          node {
            childrenPennInterrupted2021Json {
              letter {
                published_link
                title
                subhead
                author
                image_link
              }
              instagram {
                published_link
                subhead
              }
              finding_our_power {
                section
                author
                published_link
                subhead
                title
                image
              }
              finding_our_place {
                section
                author
                published_link
                subhead
                title
                image
              }
              finding_our_voice {
                section
                author
                published_link
                subhead
                title
                image
              }
              finding_ourselves {
                section
                author
                published_link
                subhead
                title
                image
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenPennInterrupted2021Json: sections },
  } = data.allFile.edges[0]

  const {
    letter,
    instagram,
    finding_our_power,
    finding_our_place,
    finding_our_voice,
    finding_ourselves,
  } = sections[0]

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pandemic, Protest, and Philly: Returning and Remembering in 2021" />
        <title>Penn, Interrupted | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Penn, Interrupted | 34th Street"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn/1becac24-f565-447b-b482-a1a7c388fa45.sized-1000x1000.png?"
        />
        <meta
          property="og:description"
          content="Pandemic, Protest, and Philly: Returning and Remembering in 2021"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2021/penn-interrupted"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Penn, Interrupted | 34th Street"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn/1becac24-f565-447b-b482-a1a7c388fa45.sized-1000x1000.png?"
        />
        <meta
          name="twitter:description"
          content="Pandemic, Protest, and Philly: Returning and Remembering in 2021"
        />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2021/penn-interrupted"
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

      <BackgroundWrapper color="#05260D">

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#FFFFFF"
        fontColor="#000000"
        img="/img/34st-navbar-logo-white.png"
      />
      
      <div>
        <img
          src={CoverImg}
          style={{ width: '100%', boxShadow: '0px 5px 6px #00000029' }}
        />
      </div>

      <div id="feature" />
      <Feature
        link={letter[0].published_link}
        headline={letter[0].title}
        subheading={letter[0].subhead}
        author={letter[0].author}
        img={letter[0].image_link}
      />

      <div id="instagram" />
      <InstagramSection title="IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag -  IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - " 
        link={instagram[0].published_link} subhead={instagram[0].subhead}></InstagramSection>
      
      <div id="finding-our-voice" />
      <ArticleGridMajorLeft multimedia={finding_our_voice} title={'Finding our Voice'}/>

      <div id="finding-our-place" />
      <ArticleGrid multimedia={finding_our_place} title={'Finding our Place'}/>

      <div id="finding-our-power" />
      <ArticleGridMajorRight multimedia={finding_our_power} title={'Finding our Power'}/>

      <div id="finding-ourselves" />
      <ArticleGrid multimedia={finding_ourselves} title={'Finding Ourselves'}/>

      <Spacer height="5rem"/>

      <Footer emoji="✊" bgColor="#FFF" fontColor="#000" year="2021"/>

      </BackgroundWrapper>
    </>
  )
}

export default Index
