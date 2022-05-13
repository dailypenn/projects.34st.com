import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar, BackgroundWrapper, Spacer } from '../../components/shared'
import CoverImg from '../../content/images/2022/penn-10/coverimg.jpeg'
import ProfileGrid from '../../components/2022/penn-10/ProfileGrid'
import PlacesCarousel from '../../components/2022/penn-10/PlacesCarousel'

const NAVBAR_TITLES = {
  left: [],
  right: [],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { eq: "penn-10-s22.json" } }
      ) {
        edges {
          node {
            childrenPenn10S22Json {
              favorite_places {
                placement
                caption
                subject
                published_link
                image
              }
              profiles {
                title
                published_link
                subhead
                author
                image
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenPenn10S22Json: sections },
  } = data.allFile.edges[0]

  const {
    favorite_places,
    profiles
  } = sections[0]

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Penn 10" />
        <title>Penn 10: Class of 2022 | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Penn 10: Class of 2022"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn-34s/d0949736-14a3-43cd-ba46-77d3bc8c9c5a.sized-1000x1000.png"
        />
        <meta
          property="og:description"
          content="This year's class is keeping it local–meet ten Penn seniors who are living and working in Philly after crossing the stage."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2022/penn-10"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Penn 10: Class of 2022"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn-34s/d0949736-14a3-43cd-ba46-77d3bc8c9c5a.sized-1000x1000.png"
        />
        <meta
          name="twitter:description"
          content="This year's class is keeping it local–meet ten Penn seniors who are living and working in Philly after crossing the stage."
        />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2022/penn-10"
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

      <BackgroundWrapper color="#FFFBEF">

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#264D76"
        fontColor="#FFFFFF"
        img="/img/2021/parrot/watermark.png"
      />
      <div>
        <img
          src={CoverImg}
          style={{ width: '100%', boxShadow: '0px 5px 6px #00000029' }}
        />
      </div>

      <div id="places"/>
      <PlacesCarousel places={favorite_places} headerColor="#60B8E5"/>

      <div id="profiles"/>
      <ProfileGrid profiles={profiles} title={'Profiles'}/>

      <Spacer height="3rem"/>

      <Footer emoji="🌟" bgColor="#264D76" fontColor="#fff" year="2022"/>

      </BackgroundWrapper>
    </>
  )
}

export default Index
