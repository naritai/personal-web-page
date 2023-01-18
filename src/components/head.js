import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '@hooks';
import { useLocation } from '@reach/router';

const Head = ({ title, description, children }) => {
  const { pathname } = useLocation();

  const { defaultDescription, defaultTitle, image, siteUrl, twitterUsername } =
    useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
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
  );
};

export default Head;
