import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar, BackgroundWrapper } from '../../components/shared/'
import Feature from '../../components/2022/love-issue/Feature.js'
import Love from '../../components/2022/love-issue/Love.js'
import EssayCarousel from '../../components/2022/love-issue/Essay.js'
import Multimedia from '../../components/2022/love-issue/Multimedia.js'

import cover_img from '../../content/images/2022/love-issue/cover_img.jpeg'

const NAVBAR_TITLES = {
  left: [
    { text: 'FEATURE', link: 'feature' },
    { text: 'ESSAY WINNERS', link: 'essay-winners' },
    { text: 'MULTIMEDIA', link: 'multimedia' },
  ],
  right: [
    { text: 'LOVE, INTROSPECTIVELY', link: 'introspectively' },
    { text: 'LOVE, AESTHETICALLY', link: 'aesthetically' },
    { text: 'LOVE, PLATONICALLY', link: 'platonically' },
  ],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "love-issue-2022.json" } }) {
        edges {
          node {
            childrenLoveIssue2022Json {
              feature {
                title
                subhead
                author
                published_link
                image_link
              }
              essay_winners {
                title
                award_tag
                author
                published_link
                color
                img {
                  childImageSharp {
                    fluid(quality: 100,maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              multimedia {
                title
                subhead
                author
                link
                img {
                  childImageSharp {
                    fluid(quality: 100,maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              love_introspectively {
                title
                subhead
                author
                published_link
                image {
                  childImageSharp {
                    fluid(quality: 100,maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              love_aesthetically {
                title
                subhead
                author
                published_link
                image {
                  childImageSharp {
                    fluid(quality: 100,maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              love_platonically {
                title
                subhead
                author
                published_link
                image {
                  childImageSharp {
                    fluid(quality: 100,maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenLoveIssue2022Json: sections },
  } = data.allFile.edges[0]

  console.log(sections)

  const {
    feature,
    essay_winners,
    multimedia,
    love_introspectively,
    love_aesthetically,
    love_platonically,
  } = sections[0]

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Love Issue" />
        <title>Love, Actually | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Love, Actually: Street’s Love Issue 2022"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn-34s/9412cc1b-4336-4deb-92f9-0b3ca08fb79a.sized-1000x1000.png?"
        />
        <meta property="og:description" content="Love, Actually: Street’s Love Issue 2022" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2022/love-issue"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Love, Actually: Street’s Love Issue 2022"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn-34s/9412cc1b-4336-4deb-92f9-0b3ca08fb79a.sized-1000x1000.png?"
        />
        <meta name="twitter:description" content="Love, Actually: Street’s Love Issue 2022" />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2022/love-issue"
        />
        <meta name="twitter:site" content="@dailypenn"/>

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

      <BackgroundWrapper color="#FCB9B2">

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#FFFFFF"
        fontColor="#000000"
        img="/img/34st-navbar-logo-white.png"
      />

      <div>
        <img
          src={cover_img}
          style={{ width: '100%', boxShadow: '0px 5px 6px #00000029' }}
        />
      </div>

      <div id="feature" />
      <Feature feature={feature[0]}/>

      <div id="essay-winners" />
      <EssayCarousel articles={essay_winners} headerColor="#8C2F39"/>

      <div id="multimedia" />
      <Multimedia multimedia={multimedia} />

      <div id="introspectively" />
      <Love articles={love_introspectively} color="#8C2F39" section="Love, Introspectively." />
      <div id="aesthetically" />
      <Love articles={love_aesthetically} color="#61192C" section="Love, Aesthetically." />
      <div id="platonically" />
      <Love articles={love_platonically} color="#3E1437" section="Love, Platonically." />

      <Footer emoji="💖" bgColor="#3E1437" fontColor="#FFFFFF" year="2022" />

      </BackgroundWrapper>
    </>
  )
}

export default Index
