module.exports = {
  siteMetadata: {
    title: `Web Ingest`,
    description: `Description.`,
    titleTemplate: `%s | Web Ingest`,
    author: `@mick_schroeder`,
    siteUrl: `https://webingest.com`,
    url: `https://webingest.com`,
    image: `icon-webingest.png`,
    twitterUsername: `@mick_schroeder`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RMM4MSRDQM", // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      name: `data`,
      options: {
        path: `src/json/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Ingest`,
        short_name: `WebIngest`,
        icon: `src/images/icon-webingest.png`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/index.css`],
      },
    },
  ],
}
