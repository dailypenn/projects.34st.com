module.exports = {
  siteMetadata: {
    title: '34th Street Project Pages',
    autor: '@dptech',
    siteUrl: 'https://projects.34st.com/'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-188534367-2',
      },
    },
    // images and JSONs for 2022/penn-10
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2022/penn-10`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2022/penn-10`,
      },
    },
    // images and JSONs for 2022/dining-guide-spring
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2022/dining-guide-spring`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2022/dining-guide-spring`,
      },
    },
    // images and JSONs for 2022/love-issue
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2022/love-issue`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2022/love-issue`,
      },
    },
    // images and JSONs for 2022/isolation
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2022/isolation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2022/isolation`,
      },
    },
    // JSONs for 2021/penn-interrupted
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2021/penn-interrupted`,
      },
    },
    // images and JSONs for 2021/penn-10
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/penn-10`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2021/penn-10`,
      },
    },
    // images and JSONs for 2021/dining-guide-spring
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/dining-guide-spring`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2021/dining-guide-spring`,
      },
    },
    // images and JSONs for 2021/dining-guide-fall
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/dining-guide-fall/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2021/dining-guide-fall/`,
      },
    },
    // images and JSONs for 2021/love-issue
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/love-issue`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2021/love-issue`,
      },
    },
    // JSONs for 2021/special-issues
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/2021/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/parrot`,
      },
    },
    // images and JSONs for 2021/special-issue
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/special-issue`,
      },
    },
    // images for 2021/pennsylvania-2020-election-philadelphia-democratic-republican
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/pennsylvania-2020-election-philadelphia-democratic-republican`,
      },
    }, 
    // images for 2021/covid-19-philadelphia-public-schools-digital-divide
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images/2021/covid-19-philadelphia-public-schools-digital-divide`,
      },
    }
  ]
}
