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
    // google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-707447-4',
      },
    },
    // images for 2021/love-issue
  ]
}
