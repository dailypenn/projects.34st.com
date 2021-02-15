import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar } from '../../components/shared/'
import Section3 from '../../components/2021/parrot/section3.js'
import Section1 from '../../components/2021/parrot/section1.js'
import DomSection from '../../components/2021/parrot/dom.js'
import Section4 from '../../components/2021/parrot/section4.js'
import Pic3 from '../../components/2021/parrot/pic3.js'
import Pic1 from '../../components/2021/parrot/pic1.js'
import Pic2 from '../../components/2021/parrot/pic2.js'
import Section2 from '../../components/2021/parrot/section2.js'
import Section5 from '../../components/2021/parrot/section5.js'
import Pic4 from '../../components/2021/parrot/pic4.js'
import Section6 from '../../components/2021/parrot/section6.js'


const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "parrot.json" } }) {
        edges {
          node {
            childrenParrotJson {
              social {
                subheader
                img
                header
              }
              section6 {
                content
              }
              section5 {
                caption1
                caption2
                img1 {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                img2 {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                content
              }
              section4 {
                caption
                img {
                  childImageSharp {
                    fluid(maxWidth: 650, maxHeight: 800) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                content
              }
              section3 {
                author
                quote
                content
              }
              section2 {
                author
                caption
                content
                img1 {
                  childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                img2 {
                  childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 300) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                img3 {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 350) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                quote
              }
              section1 {
                caption
                content
                img {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              pic4 {
                caption
                credit
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 300) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              pic3 {
                author
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                quote
              }
              pic2 {
                author
                caption
                img {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                quote
              }
              pic1 {
                author
                credit
                img {
                  childImageSharp {
                    fluid(maxWidth: 1200, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                quote
              }
              dom {
                subheader
                img {
                  childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                header
                description
                credit
                caption
                author
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenParrotJson: sections },
  } = data.allFile.edges[0]

  const {
    social,
    dom,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    pic1,
    pic2,
    pic3,
    pic4,
  } = sections[0]

  const { header, subheader, img } = social
  return (
    <>
          <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Love Issue" />
        <title>{header} | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content={header}
        />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:description" content={subheader} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={header}
        />
        <meta
          name="twitter:image"
          content=""
        />
        <meta name="twitter:description" content={subheader} />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/"
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
      <DomSection section={dom}/>
      <Section1 section={section1}/>
      <Pic1 section={pic1}/>
      <Section2 section={section2}/>
      <Pic2 section={pic2}/>
      <Section3 json={section3}/>
      <Section4 json={section4}></Section4>
      <Pic3 json={pic3}></Pic3>
      <Section5 json={section5}></Section5>
      <Pic4 json={pic4}></Pic4>
      <Section6 json={section6}></Section6>
    </>
  )
}

export default Index
