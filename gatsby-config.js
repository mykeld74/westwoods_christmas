module.exports = {
  siteMetadata: {
    title: `Westwoods Community Church Christmas Eve`,
    description: `Join us for our Christmas Eve services at 4:00pm and 5:30pm`,
    author: `Mike Daugherty`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ED2327`,
        theme_color: `#ED2327`,
        display: `minimal-ui`,
        icon: `src/images/ww-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Skranji:400,700`, `Caveat\:400,700`, `Marko+One`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
