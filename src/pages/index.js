import React, { Fragment } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import About from "../components/sections/about/about";

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
          <About />
        </StyledMainContainer>
      </Layout>
    </Fragment>
  )
}

export default IndexPage;
