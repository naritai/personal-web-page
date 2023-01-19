import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const StyledMainContainer = styled.main`
  width: min(65%, 960px);
  margin: 0 auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1088px) {
    width: 100%;
    padding: 0 100px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 25px;
  }
`;

const Placeholder = styled.h2`
  ${({ theme }) => theme.mixins.promoHeading};

  && {
    font-size: 2em;
    font-family: var(--font-mono);
    margin-bottom: 20px;
    white-space: normal;
    text-align: center;
  }
`;

const StyledHomeButton = styled.div`
  ${({ theme }) => theme.mixins.button};
`;

const WithFadeEffect = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${({ name, delay }) => `${name}  0.75s ease-out ${delay} forwards`};
`;

function BlogPage({ location }) {
  return (
    <Layout location={location}>
      <Helmet title="Blog" />

      <StyledMainContainer>
        <WithFadeEffect delay="0.1s" name="fadeUp">
          <Placeholder>Page in development.</Placeholder>
          <Link to="/">
            <StyledHomeButton>home</StyledHomeButton>
          </Link>
        </WithFadeEffect>
      </StyledMainContainer>
    </Layout>
  );
}

BlogPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPage;
