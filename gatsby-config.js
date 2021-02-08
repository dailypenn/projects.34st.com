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
        trackingId: 'UA-188534367-2',
      },
    },
    // images for 2021/love-issue
  ]
}
