import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar } from '../../components/shared/'


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
    </>
  )
}

export default Index
