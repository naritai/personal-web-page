import React, { Fragment } from "react";
import styled from "styled-components";
import Layout from "@components/layout";
import { Link } from "gatsby";

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

const BlogPage = () => {
  return (
    <Fragment>
      <Layout hideNav={true}>
        <StyledMainContainer>
          <Placeholder>Page in development.</Placeholder>
          <Link to="/">
             <StyledHomeButton>home</StyledHomeButton>
          </Link>
        </StyledMainContainer>
      </Layout>
    </Fragment>
  )
}

export default BlogPage;
