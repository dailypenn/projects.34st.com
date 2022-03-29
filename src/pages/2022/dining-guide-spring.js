import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer, NavBar, BackgroundWrapper, Spacer } from '../../components/shared'
import CoverImg from '../../content/images/2022/dining-guide-spring/cover_img.png'
import Feature from '../../components/2022/dining-guide-spring/Feature'
import InstagramSection from '../../components/2021/dining-guide-fall/InstagramSection'
import ArticleGrid from '../../components/2022/dining-guide-spring/ArticleGrid'
import Multimedia from '../../components/2022/dining-guide-spring/Multimedia.js'
import RestaurantCarousel from '../../components/2022/dining-guide-spring/Restaurants.js'

const NAVBAR_TITLES = {
  left: [
    { text: 'FEATURE', link: 'feature' },
    { text: 'SPILL THE BEANS', link: 'spill-the-beans' },
    { text: 'PHOTO ESSAY', link: 'photo-essay' },
    { text: 'MULTIMEDIA', link: 'multimedia' },
  ],
  right: [
    { text: 'BIGGER FISH TO FRY', link: 'bigger-fish-to-fry' },
    { text: 'ICING ON THE CAKE', link: 'icing-on-the-cake' },
    { text: 'RESTAURANT REVIEWS', link: 'restaurant-reviews' },
  ],
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { eq: "dining-guide-spring-2022.json" } }
      ) {
        edges {
          node {
            childrenDiningGuideSpring2022Json {
              feature {
                published_link
                title
                subhead
                author
                image_link
              }
              spill_the_beans {
                author
                published_link
                subhead
                title
                image
              }
              photo_essay {
                published_link
                title
                subhead
                author
                image_link
              }
              multimedia {
                placement
                title
                link
              }
              bigger_fish_to_fry {
                author
                published_link
                subhead
                title
                image
              }
              icing_on_the_cake {
                author
                published_link
                subhead
                title
                image
              }
              restaurant_reviews {
                title
                author
                published_link
                image
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenDiningGuideSpring2022Json: sections },
  } = data.allFile.edges[0]

  const {
    feature,
    spill_the_beans,
    photo_essay,
    multimedia,
    bigger_fish_to_fry,
    icing_on_the_cake,
    restaurant_reviews
  } = sections[0]

  console.log(multimedia)

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dining Guide" />
        <title>Dining Guide Spring 2022 | 34th Street</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Dining Guide Spring 2022"
        />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/snwceomedia/dpn-34s/bdb0f621-28f3-407d-a22e-6ac6e1a39b41.original.png"
        />
        <meta
          property="og:description"
          content="Street's Cheap Eats: more restaurants, more impact, and more of Philly, all for under $15."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.34st.com/2022/dining-guide-spring"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dining Guide Spring 2022"
        />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/snwceomedia/dpn-34s/bdb0f621-28f3-407d-a22e-6ac6e1a39b41.original.png"
        />
        <meta
          name="twitter:description"
          content="Street's Cheap Eats: more restaurants, more impact, and more of Philly, all for under $15."
        />
        <meta
          name="twitter:url"
          content="https://projects.34st.com/2022/dining-guide-spring"
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

      <BackgroundWrapper color="#F9EAD5">

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

      <div id="spill-the-beans" />
      <ArticleGrid multimedia={spill_the_beans} title={'Spill the Beans'}/>

      <Spacer height="5rem"/>

      <div id="photo-essay" />
      <Feature
        link={photo_essay[0].published_link}
        heading={"Photo Essay"}
        headline={photo_essay[0].title}
        subheading={photo_essay[0].subhead}
        author={photo_essay[0].author}
        img={photo_essay[0].image_link}
      />

      <div id="multimedia" />
      <Multimedia multimedia={multimedia[0]} />

      <div id="bigger-fish-to-fry" />
      <ArticleGrid multimedia={bigger_fish_to_fry} title={'Bigger Fish to Fry'}/>

      <div id="icing-on-the-cake" />
      <ArticleGrid multimedia={icing_on_the_cake} title={'Icing on the Cake'}/>

      <div id="restaurant-reviews" />
      <RestaurantCarousel articles={restaurant_reviews}/>

      <Spacer height="5rem"/>

      <Footer emoji="🎂" bgColor="#FFF" fontColor="#000" year="2021"/>

      </BackgroundWrapper>
    </>
  )
}

export default Index