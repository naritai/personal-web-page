import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';
import { Hero } from '@components/sections/hero/';
import { Contact } from '@components/sections/contact';
import { Experience } from '@components/sections/experience';
import PropTypes from 'prop-types';

const StyledMainContainer = styled.main`
  width: min(65%, 960px);
  margin: 0 auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1088px) {
    width: 100%;
    padding: 0 100px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 25px;
  }
`;

function IndexPage({ location }) {
  return (
    <Layout location={location}>
      <StyledMainContainer>
        <Hero />
        <Experience />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  }).isRequired,
};

export default IndexPage;
