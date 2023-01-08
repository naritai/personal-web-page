import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
          twitterUsername
        }
      }
    }
  `);

  const { site: { siteMetadata } = {} } = data;
  return siteMetadata;
}

export { useSiteMetadata };