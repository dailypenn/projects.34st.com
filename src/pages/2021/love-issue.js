import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar } from '../../components/shared/'
import Feature from '../../components/2021/love-issue/Feature.js'
import Video from '../../components/2021/love-issue/Video.js'
import Love from '../../components/2021/love-issue/Love.js'
import EssayCarousel from '../../components/2021/love-issue/Essay.js'
import Multimedia from '../../components/2021/love-issue/Multimedia.js'

const NAVBAR_TITLES = {
  left: [
    { text: 'FEATURE', link: 'feature' },
    { text: 'ESSAY WINNERS', link: 'essay-winners' },
    { text: 'MULTIMEDIA', link: 'multimedia' },
  ],
  right: [
    { text: 'LOVE, IRL.', link: 'irl' },
    { text: 'LOVE, 4 U.', link: 'for-you' },
    { text: 'LOVE, ONLINE.', link: 'online' },
  ],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "love-issue.json" } }) {
        edges {
          node {
            childrenLoveIssueJson {
              cover_img {
                childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 523) {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
              essay_winner {
                place
                color
                author
                link
                subhead
                title
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              love_4_u {
                author
                link
                subhead
                title
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              love_irl {
                author
                link
                subhead
                title
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              love_online {
                author
                link
                subhead
                title
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 650) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              multimedia {
                author
                link
                title
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
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
    node: { childrenLoveIssueJson: sections },
  } = data.allFile.edges[0]

  const {
    cover_img,
    essay_winner,
    multimedia,
    love_irl,
    love_4_u,
    love_online,
  } = sections[0]

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Love Issue" />
        <title>Love Issue | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Best of Penn | The Daily Pennsylvanian"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn-34s/8cf07f0e-d79c-445a-994d-da4dae0b1c9b.sized-1000x1000.png"
        />
        <meta property="og:description" content="Best of Penn" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.thedp.com/2021/best-of-penn"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best of Penn | The Daily Pennsylvanian"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn-34s/8cf07f0e-d79c-445a-994d-da4dae0b1c9b.sized-1000x1000.png"
        />
        <meta name="twitter:description" content="Best of Penn" />
        <meta
          name="twitter:url"
          content="https://projects.thedp.com/2021/best-of-penn"
        />
        <meta name="twitter:site" content="@dailypenn"></meta>

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

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#FFFFFF"
        fontColor="#000000"
        img="/img/34st-navbar-logo-white.png"
      />

      <Img
        fluid={cover_img.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
      />

      <Feature />
      <EssayCarousel articles={essay_winner} />
      <Multimedia multimedia={multimedia} />
      <Video />

      <div id="irl" />
      <Love articles={love_irl} color="#73A992" section="LOVE, IRL." />
      <div id="for-you" />
      <Love articles={love_4_u} color="#B7C4EB" section="LOVE, 4 U." />
      <div id="online" />
      <Love articles={love_online} color="#FD9B7B" section="LOVE, ONLINE." />

      <Footer emoji="💖" bgColor="#000000" fontColor="#FFFFFF" year="2021" />
    </>
  )
}

export default Index
