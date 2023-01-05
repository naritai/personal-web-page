import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { usePrefersReducedMotion, useScrollDirection } from '@hooks';
import logo from '@images/logo.svg';
import { navLinks } from '@config';
import SiteNav from './site-nav';
import MobileNav from './mobile-nav';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: var(--nav-height);
  top: 0;
  left: 0;
  background-color: #000000;
  box-shadow: 0 0 5px rgba(202, 66, 71, 0.5);
  backdrop-filter: blur(10px);
  z-index: 10;
  box-shadow: 0 10px 30px -10px #0F1020;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

  @media only screen and (max-width: 768px) {
    padding: 0 25px;
    font-size: 0.7em;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${({ scrolledToTop, scrollDirection }) => scrollDirection === 'up' && !scrolledToTop && (
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(15, 16, 32, 0.75);
        box-shadow: 0 10px 30px -10px #0F1020;
        `
    )}

    ${({ scrolledToTop, scrollDirection }) => scrollDirection === 'down' && !scrolledToTop && (
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px #0F1020;
        `
    )}
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: min(60%, 960px);
  margin: 0 auto;

  @media only screen and (max-width: 1088px) {
    width: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledMainNav = styled.nav`
  display: flex;
  align-items: center;
  min-height: 70px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledLogoLink = styled.a`
  margin-right: 15px;
  width: 45px;
  height: 35px;

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }

  img {
    margin: 0;
    padding: 0;
    width: 45px;
    height: 35px;
    user-select: none;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    img:hover {
      transform: none;
    }
  }
`;

const Nav = () => {
  const firstLink = (Array.isArray(navLinks) && navLinks)[0].name;
  const [activeLink, setActiveLink] = useState(firstLink);
  const changeActiveLink = (event) => setActiveLink(event.currentTarget.dataset.name);

  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 30);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <StyledHeader scrolledToTop={scrolledToTop} scrollDirection={scrollDirection}>
      <StyledWrapper>
        <StyledMainNav>
          <StyledLogoLink href="#" aria-label="home" tabindex="-1">
            <img src={logo} alt="Main logo"  width="55" height="45" />
          </StyledLogoLink>

          <SiteNav activeLink={activeLink} onLinkClick={changeActiveLink} />
          <MobileNav activeLink={activeLink} onLinkClick={changeActiveLink} />
        </StyledMainNav>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Nav;