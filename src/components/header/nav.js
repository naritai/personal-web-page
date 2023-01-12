import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import SiteNav from './site-nav';
import MobileNav from './mobile-nav';
import { useScrollDirection } from '@hooks';
import { IconLogo } from '../icons/logo';
import { Link } from 'gatsby';

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
  width: min(65%, 960px);
  margin: 0 auto;
  padding: 0 44px;

  @media only screen and (max-width: 1088px) {
    width: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    justify-content: space-between;
  }
`;

const StyledMainNav = styled.nav`
  display: flex;
  align-items: center;
  min-height: 65px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledLogoWrapper = styled.div`
  margin-right: 15px;
  width: 50px;
  height: 40px;

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }

  a:hover {
    cursor: unset;
  }

  svg {
    margin: 0;
    padding: 0;
    width: 50px;
    height: 40px;
    user-select: none;
  }

  svg:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    svg:hover {
      transform: none;
    }
  }
`;

const Nav = ({ isHome }) => {
  const [activeLink, setActiveLink] = useState(null);
  const changeActiveLink = (event) => setActiveLink(event.currentTarget.dataset.name);

  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 40);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <StyledLogoWrapper >
      <Link to="/" aria-label="home" tabIndex="-1">
        <IconLogo />
      </Link>
    </StyledLogoWrapper>
  );

  return (
    <StyledHeader scrolledToTop={scrolledToTop} scrollDirection={scrollDirection}>
      <StyledWrapper>
        <StyledMainNav>
          <Logo />
          <SiteNav isHome={isHome} activeLink={activeLink} onLinkClick={changeActiveLink} />
          <MobileNav activeLink={activeLink} onLinkClick={changeActiveLink} />
        </StyledMainNav>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Nav;