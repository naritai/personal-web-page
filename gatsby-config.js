/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Alex Vorontsov`,
    description: 'Alex Vorontsov is a web devloper who specializes in building dynamic and robust applications with intuitive UI.',
    siteUrl: `https://vorontsov.dev`,
    twitterUsername: `@dzhumandzhu`,
    image: `/og.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alex Vorontsov',
        short_name: 'Alex Vorontsov',
        start_url: '/',
        background_color: '#0F1020',
        theme_color: '#0F1020',
        display: 'minimal-ui',
        icon: "src/images/logo.svg"
      }
    }, "gatsby-transformer-remark", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    }
  ]
};