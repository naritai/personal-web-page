import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '@hooks';
import { useLocation } from '@reach/router';
import PropTypes from 'prop-types';

function Head({ title, description, children }) {
  const { pathname } = useLocation();
  const { defaultDescription, defaultTitle, image, siteUrl, twitterUsername } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
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

      <meta name="google-site-verification" content="9fAFFp1LbfaHvd1G4MGGJ-X4WeUtKUcC3c7A1kr19E8" />
      {children}
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

Head.defaultProps = {
  title: null,
  description: null,
  children: null,
};

export default Head;
