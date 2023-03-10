import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useScrollDirection } from '@hooks';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import SiteNav from './site-nav';
import MobileNav from './mobile-nav';
import { IconLogo } from '../icons/logo';

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
  backdrop-filter: blur(10px);
  z-index: 12;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media only screen and (max-width: 768px) {
    padding: 0 25px;
    font-size: 0.7em;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${({ scrolledToTop, scrollDirection }) =>
      scrollDirection === 'up' &&
      !scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(2, 23, 26, 0.75);
        box-shadow: 0 10px 30px -10px #02171a;
      `}

    ${({ scrolledToTop, scrollDirection }) =>
      scrollDirection === 'down' &&
      !scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px #02171a;
      `}
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
  z-index: 13;

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

function Nav({ isHome }) {
  const [activeLink, setActiveLink] = useState(null);
  const changeActiveLink = (event) => setActiveLink(event.currentTarget.dataset.name);

  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = (
    <StyledLogoWrapper>
      {isHome ? (
        <a href="/" aria-label="home" tabIndex="-1">
          <IconLogo />
        </a>
      ) : (
        <Link to="/" aria-label="home" tabIndex="-1">
          <IconLogo />
        </Link>
      )}
    </StyledLogoWrapper>
  );

  return (
    <StyledHeader scrolledToTop={scrolledToTop} scrollDirection={scrollDirection}>
      <StyledWrapper>
        <StyledMainNav>
          {Logo}
          <SiteNav isHome={isHome} activeLink={activeLink} onLinkClick={changeActiveLink} />
          <MobileNav activeLink={activeLink} onLinkClick={changeActiveLink} />
        </StyledMainNav>
      </StyledWrapper>
    </StyledHeader>
  );
}

Nav.propTypes = {
  isHome: PropTypes.bool,
};

Nav.defaultProps = {
  isHome: true,
};

export default Nav;
