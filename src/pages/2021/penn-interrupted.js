import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar, BackgroundWrapper, Spacer } from '../../components/shared'
import CoverImg from '../../content/images/2021/dining-guide-fall/cover_img.png'
import Feature from '../../components/2021/dining-guide-fall/Feature'
import InstagramSection from '../../components/2021/dining-guide-fall/InstagramSection'
import ArticleGrid from '../../components/2021/dining-guide-fall/ArticleGrid'

const NAVBAR_TITLES = {
  left: [
    { text: 'FEATURE', link: 'feature' },
    { text: 'INSTAGRAM', link: 'grabbing-a-bite' },
    { text: 'FINDING OUR VOICE', link: 'breaking-bread' },
  ],
  right: [
    { text: 'FINDING OUR PLACE', link: 'skimming-the-menu' },
    { text: 'FINDING OUR POWER', link: 'food-for-thought' },
    { text: 'FINDING OURSELVES', link: 'food-for-thought' },
  ],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { eq: "dining-guide-fall-2021.json" } }
      ) {
        edges {
          node {
            childrenDiningGuideFall2021Json {
              feature {
                published_link
                title
                subhead
                author
                image_link
              }
              instagram {
                link
              }
              grabbing_a_bite {
                author
                published_link
                subhead
                title
                image
              }
              breaking_bread {
                author
                published_link
                subhead
                title
                image
              }
              skimming_the_menu {
                author
                published_link
                subhead
                title
                image
              }
              food_for_thought {
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
    node: { childrenDiningGuideFall2021Json: sections },
  } = data.allFile.edges[0]

  const {
    feature,
    instagram,
    grabbing_a_bite,
    breaking_bread,
    skimming_the_menu,
    food_for_thought,
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
          content="https://snworksceo.imgix.net/dpn/aacde8d3-c7b2-4c05-9860-856d1cbe9c52.sized-1000x1000.png?"
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
          content="https://snworksceo.imgix.net/dpn/aacde8d3-c7b2-4c05-9860-856d1cbe9c52.sized-1000x1000.png?"
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

      <BackgroundWrapper color="#FCFCE2">

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
        link={feature[0].published_link}
        heading={"Feature"}
        headline={feature[0].title}
        subheading={feature[0].subhead}
        author={feature[0].author}
        img={feature[0].image_link}
      />

      <div id="multimedia" />
      <InstagramSection title="IG: @34stmag" links={instagram} ></InstagramSection>
      
      <div id="grabbing-a-bite" />
      <ArticleGrid multimedia={grabbing_a_bite} title={'Grabbing a Bite'}/>

      <div id="breaking-bread" />
      <ArticleGrid multimedia={breaking_bread} title={'Breaking Bread'}/>

      <div id="skimming-the-menu" />
      <ArticleGrid multimedia={skimming_the_menu} title={'Skimming the Menu'}/>

      <div id="food-for-thought" />
      <ArticleGrid multimedia={food_for_thought} title={'Food for Thought'}/>

      <Spacer height="5rem"/>

      <Footer emoji="🍳" bgColor="#FFF" fontColor="#000" year="2021"/>

      </BackgroundWrapper>
    </>
  )
}

export default Index
