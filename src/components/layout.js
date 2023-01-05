import * as React from 'react';
import Head from '@components/head';
import GlobalStyle from "@styles/GlobalStyles";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Nav from './navigation/nav';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <a href="#content" className="skip-to-content">
            Skip to content
          </a>
         
          <StyledContent>
            <Nav />

            <div id="content">
              {children}
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>      
    </>
  )
}

export default Layout;