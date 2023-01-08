import React, { Fragment } from "react";
import styled from "styled-components";
import Layout from "@components/layout";
import { Hero } from "@components/sections/hero/";
import { Contact } from '@components/sections/contact';
import { Experience } from '@components/sections/experience';

const StyledMainContainer = styled.main`
  width: min(60%, 960px);
  margin: 0 auto;
  min-height: 100vh;

  @media only screen and (max-width: 1088px) {
    width: 100%;
    padding: 0 50px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 25px;
  }  
`;

const IndexPage = () => {
  return (
    <Fragment>
      <Layout>
        <StyledMainContainer>
          <Hero />
          <Experience />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </Fragment>
  )
}

export default IndexPage;
