import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { Footer, NavBar } from '../../components/shared'
import Section3 from '../../components/2021/parrot/section3.js'
import Section1 from '../../components/2021/parrot/section1.js'
import DomSection from '../../components/2021/parrot/dom.js'
import Section4 from '../../components/2021/parrot/section4.js'
import Pic3 from '../../components/2021/parrot/pic3.js'
import Pic1 from '../../components/2021/parrot/pic1.js'
import Pic2 from '../../components/2021/parrot/pic2.js'
import Section2 from '../../components/2021/parrot/section2.js'
import Section5 from '../../components/2021/parrot/section5.js'

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: {
            eq: "special-issues/pre-med-humanities-covid-19-pandemic-medicine-penn.json"
          }
        }
      ) {
        edges {
          node {
            childrenSpecialIssuesJson {
              dom {
                author
                credit
                header
                img {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 900, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                subheader
              }
              quote1 {
                author
                bgColor
                color
                credit
                img {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 950, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                quote
              }
              quote2 {
                author
                bgColor
                color
                credit
                img {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 950, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                quote
              }
              quote3 {
                author
                bgColor
                color
                quote
              }
              section1 {
                color
                content
                dropCap
              }
              section2 {
                author
                bgColor
                color
                content
                credit
                img {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 800, maxHeight: 800) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                quote
              }
              section3 {
                author
                color
                content
                quote
              }
              section4 {
                content
                credit
                img {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 650, maxHeight: 800) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              section5 {
                credit1
                credit2
                content
                img1 {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 1300, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                img2 {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 1000, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                content
              }
              section6 {
                content
                credit
                img {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 650, maxHeight: 800) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              social {
                img {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 900, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
                slug
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenSpecialIssuesJson: sections }
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
    quote1,
    quote2,
    quote3
  } = sections[0]

  const { img, slug } = social
  const { header, subheader } = dom

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={subheader} />
        <title>{header} | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta property="og:title" content={header} />
        <meta property="og:image" content={img} />
        <meta property="og:description" content={subheader} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://projects.34st.com${slug}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={header} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:description" content={subheader} />
        <meta name="twitter:url" content={`https://projects.34st.com${slug}`} />
        <meta name="twitter:site" content="@dailypenn" />

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        />
      </Helmet>

      <DomSection section={dom} />
      <Section1 section={section1} />
      <Pic1 section={quote1} />
      <Section2 section={section2} />
      <Pic2 section={quote2} />
      <Section3 json={section3} />
      <Section4 json={section4} />
      <Pic3 {...quote3} />
      <Section5 json={section5} />
      <Footer bgColor="black" fontColor="white" />
    </>
  )
}

export default Index
