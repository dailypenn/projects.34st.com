import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar } from '../../components/shared'
import CoverImg from '../../content/images/2021/dining-guide-spring/cover_img.png'
import Feature from '../../components/shared/Feature.js'
import ResponsiveGrid from '../../components/2021/dining-guide/ResponsiveGrid'

const NAVBAR_TITLES = {
  left: [
    { text: 'FEATURE', link: 'feature' },
    { text: 'MULTIMEDIA', link: 'multimedia' },
    { text: 'PHOTO ESSAY', link: 'photo-essay' },
  ],
  right: [
    { text: 'IN THE KITCHEN', link: 'in-the-kitchen' },
    { text: 'ON THE TABLE', link: 'on-the-table' },
    { text: 'THE \'SERVICE INDUSTRY\'', link: 'the-service-industry' },
  ],
}

const Index = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { relativePath: { eq: "dining-guide-spring-2021.json" } }) {
      edges {
        node {
          childrenDiningGuideSpring2021Json {
            feature {
              link
              headline
              heading
              subheading
              author
              img
            }
            instagram {
              link
            }
            photo_essay {
              link
              headline
              heading
              subheading
              author
              img
            }
            in_the_kitchen {
              author
              link
              subhead
              title
              img {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
            }
            on_the_table {
              author
              link
              subhead
              title
              img {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
            }
            the_service_industry {
              author
              link
              subhead
              title
              img {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 800) {
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
    node: { childrenDiningGuideSpring2021Json: sections },
  } = data.allFile.edges[0]

  const {
    feature,
    instagram,
    photo_essay,
    in_the_kitchen,
    on_the_table,
    the_service_industry,
  } = sections[0]

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dining Guide" />
        <title>Dining Guide Spring 2021 | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Reality Bites: Street's Spring 2021 Dining Guide"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn/79644a53-b06e-4385-a294-969556c6c677.sized-1000x1000.png"
        />
        <meta property="og:description" content="How COVID-19 shook up the food industry" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2021/dining-guide-spring"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reality Bites: Street's Spring 2021 Dining Guide"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn/79644a53-b06e-4385-a294-969556c6c677.sized-1000x1000.png"
        />
        <meta name="twitter:description" content="How COVID-19 shook up the food industry" />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2021/dining-guide-spring"
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

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#FFFFFF"
        fontColor="#000000"
        img="/img/34st-navbar-logo-white.png"
      />
      <div>
        <img src={CoverImg} style={{ width: '100%', boxShadow: '0px 5px 6px #00000029', }} />
      </div>

      <div id="feature" />
      <Feature 
        link={feature[0].link}
        heading={feature[0].heading}
        headline={feature[0].headline}
        subheading={feature[0].subheading}
        author={feature[0].author}
        img={feature[0].img}
      />

      <div id="multimedia" />

      <div id="photo-essay" />
      <Feature 
        link={photo_essay[0].link}
        heading={photo_essay[0].heading}
        headline={photo_essay[0].headline}
        subheading={photo_essay[0].subheading}
        author={photo_essay[0].author}
        img={photo_essay[0].img}
      />
      
      <div id="in-the-kitchen" />
      <ResponsiveGrid multimedia={in_the_kitchen} title={'In The Kitchen'}/>

      <div id="on-the-table" />
      <ResponsiveGrid multimedia={on_the_table} title={'On The Table'}/>

      
      <div id="the-service-industry" />
      <ResponsiveGrid multimedia={the_service_industry} title={'The Service Industry'}/>

      <Footer emoji="🍳" bgColor="#FFF" fontColor="#000" year="2021" />
    </>
  )
}

export default Index
