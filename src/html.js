import React from 'react';
import PropTypes from 'prop-types';
import SpaceMonoRegularWoff from '@fonts/SpaceMono/space-mono-regular.woff';
import SpaceMonoRegularWoff2 from '@fonts/SpaceMono/space-mono-regular.woff2';
import BebasNeueRegularWoff from '@fonts/BebasNeue/bebas-neue-regular.woff';
import BebasNeueRegularWoff2 from '@fonts/BebasNeue/bebas-neue-regular.woff2';
import avatar from '@images/avatar.png';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          rel="preload"
          href={SpaceMonoRegularWoff}
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={SpaceMonoRegularWoff2}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={BebasNeueRegularWoff}
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={BebasNeueRegularWoff2}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={avatar}
          as="image"
          type="image/png"
          crossOrigin="anonymous"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} styles="min-height: 100vh">
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
