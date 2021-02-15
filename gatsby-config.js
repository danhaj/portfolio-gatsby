module.exports = {
  siteMetadata: {
    title: `Daniel Hajduk`,
    description: `Junior Frontend Developer Portfolio`,
    author: ``,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#201E1F`,
        theme_color: `#201E1F`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer `,
        },
        queries: [
          `{ viewer {                 
            pinnedItems(first: 6, types: REPOSITORY){
              nodes {
                ... on Repository {
                  id                       
                  name
                  url
                  description
                  homepageUrl
                }
              }
            }}
          }`,
        ],
      },
    },
  ],
};
