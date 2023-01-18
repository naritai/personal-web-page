import React, { Fragment } from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';
import { Hero } from '@components/sections/hero/';
import { Contact } from '@components/sections/contact';
import { Experience } from '@components/sections/experience';

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

const IndexPage = ({ location }) => {
  return (
    <Fragment>
      <Layout location={location}>
        <StyledMainContainer>
          <Hero />
          <Experience />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
