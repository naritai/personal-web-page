import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          image
          siteUrl
          twitterUsername
        }
      }
    }
  `);

  const { site: { siteMetadata } = {} } = data;
  return siteMetadata;
}

export { useSiteMetadata };