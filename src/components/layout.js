import React, { useEffect } from 'react';
import Head from '@components/head';
import GlobalStyle from "@styles/GlobalStyles";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Nav from './header/nav';
import Footer from './footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {

  const setExternalLinksSafeAttrs = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      })
    }
  }

  useEffect(() => {
    setExternalLinksSafeAttrs();
  });

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
              <Footer />
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>      
    </>
  )
}

export default Layout;