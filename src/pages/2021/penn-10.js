import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar, BackgroundWrapper, Spacer } from '../../components/shared'
import CoverImg from '../../content/images/2021/penn-10/cover_img.png'
import ProfileGrid from '../../components/2021/penn-10/ProfileGrid'
import EditorLetter from '../../components/2021/penn-10/EditorLetter'
import PennDeclassified from '../../components/2021/penn-10/PennDeclassified'

const NAVBAR_TITLES = {
  left: [],
  right: [],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { eq: "penn-10-2021.json" } }
      ) {
        edges {
          node {
            childrenPenn102021Json {
              editor_letter {
                text
                subheading
                author
                img {
                    childImageSharp {
                      fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyImageSharpFluid
                        src
                      }
                    }
                }
              }
              penn_declassified {
                link
                subheading
                author
              }
              profiles {
                name
                link
                subhead
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
    node: { childrenPenn102021Json: sections },
  } = data.allFile.edges[0]

  const {
    editor_letter,
    penn_declassified,
    profiles
  } = sections[0]

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Penn 10" />
        <title>Penn 10: Class of 2021 | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Penn 10: Class of 2021"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn-34s/60e8675f-fdaa-4943-a678-3ad35b6a9afd.sized-1000x1000.jpeg?"
        />
        <meta
          property="og:description"
          content="From working on the frontlines of the pandemic to creating inclusive spaces on campus, this is the class of 2021 Penn 10."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2021/penn-10"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Penn 10: Class of 2021"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn-34s/60e8675f-fdaa-4943-a678-3ad35b6a9afd.sized-1000x1000.jpeg?"
        />
        <meta
          name="twitter:description"
          content="From working on the frontlines of the pandemic to creating inclusive spaces on campus, this is the class of 2021 Penn 10."
        />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2021/penn-10"
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

      <BackgroundWrapper color="#fff">

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#FFFFFF"
        fontColor="#FFFFFF"
        img="/img/34st-navbar-logo-purple.png"
      />
      <div>
        <img
          src={CoverImg}
          style={{ width: '100%', boxShadow: '0px 5px 6px #00000029' }}
        />
      </div>

      <div id="editor-letter"/>
      <EditorLetter letter={editor_letter[0]} />

      <div id="penn-declassified"/>
      <PennDeclassified info={penn_declassified[0]} />

      <div id="profiles"/>
      <ProfileGrid profiles={profiles} title={'Profiles'}/>

      <Spacer height="3rem"/>

      <Footer emoji="🌟" bgColor="#000" fontColor="#fff" year="2021"/>

      </BackgroundWrapper>
    </>
  )
}

export default Index
