import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, description, pathname, children }) => {
  const { site } = useStaticQuery(graphql`
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

  const {
    description: defaultDescription,
    title: defaultTitle,
    image,
    siteUrl,
    twitterUsername
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername
  };

  // TODO: titleTemplate
  // TODO: google tag manager
  // TODO: preload space mono fonts

  return (
    <Helmet title={title} defaultTitle={seo.title} >
      <html lang="en" />
  
      <title>{seo.title}</title>
      <meta name="description" content={seo.title} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content="Alex Voronetskiy" />
      <meta name="og:description" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content="Alex Voronetskiy" />
      <meta name="twitter:description" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />

      {children}
    </Helmet>
  )
}

export default Head;

// TODO: refactor to pure gatsby head api (set into pages)