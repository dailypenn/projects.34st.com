import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar } from '../../components/shared/'
import Section4 from '../../components/2021/parrot/section4.js'


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
                img1
                img2
                content
              }
              section4 {
                caption
                img
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
                img1
                img2
                img3
                quote
              }
              section1 {
                caption
                content
                img
              }
              pic4 {
                caption
                credit
                img
              }
              pic3 {
                author
                img
                quote
              }
              pic2 {
                author
                caption
                img
                quote
              }
              pic1 {
                author
                credit
                img
                quote
              }
              dom {
                subheader
                img
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
    node: { childrenLoveIssueJson: sections },
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
          content="TTYL, XOXO: Street’s Quarantined Love Issue"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn-34s/8cf07f0e-d79c-445a-994d-da4dae0b1c9b.sized-1000x1000.png"
        />
        <meta property="og:description" content="From Zoom dates to long walks around our blocks, here’s how Penn found love under lockdown" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2021/love-issue"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TTYL, XOXO: Street’s Quarantined Love Issue"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn-34s/8cf07f0e-d79c-445a-994d-da4dae0b1c9b.sized-1000x1000.png"
        />
        <meta name="twitter:description" content="From Zoom dates to long walks around our blocks, here’s how Penn found love under lockdown" />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2021/love-issue"
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
      <Section4></Section4>
    </>
  )
}

export default Index
