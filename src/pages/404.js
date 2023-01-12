import React, { Fragment } from "react";
import styled from "styled-components";
import Layout from "@components/layout";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

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
  ${({ theme }) => theme.mixins.promoHeading };

  && {
    white-space: normal;
    font-family: var(--font-mono);
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const StyledHomeButton = styled.a`
  ${({ theme }) => theme.mixins.button};
`;

const NotFoundPage = ({ location }) => {
  return (
    <Fragment>
      <Layout location={location}>
        <Helmet title="Page Not Found" />

        <StyledMainContainer>
          <Placeholder> Sorry, we couldn’t find what you were looking for.</Placeholder>
          <Link to="/">
             <StyledHomeButton>home</StyledHomeButton>
          </Link>
        </StyledMainContainer>
      </Layout>
    </Fragment>
  )
}

export default NotFoundPage
