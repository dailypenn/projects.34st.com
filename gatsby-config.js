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
    // images for 2021/love-issue
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
    }
  ]
}
