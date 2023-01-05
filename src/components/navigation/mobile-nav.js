import React, { useState } from 'react';
import styled from 'styled-components';
import { navLinks } from '@config';
import { Link } from 'gatsby';
import BurgerButton from './burger-button';
import { Helmet } from 'react-helmet';

const StyledWrapper = styled.div`
  display: none;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-top: 14px;
      padding-bottom: 14px;
      font-size: 0.93em;
      font-size: clamp(14px, 4vw, 18px);
    }

    a {
      width: 100%;
      text-align: center;
      color: rgb(155, 152, 152);
      text-decoration: none;
      outline: none;
      padding: 3px 5px 10px;
      vertical-align: middle;
      counter-increment: item 1;
    }

    a::before {
      content: "0" counter(item) ".";
      display: inline-block;
      margin-right: 5px;
      padding: 3px 0 10px;
      text-align: right;
      color: #E5C687;
    }

    a:visited {
      color: rgb(155, 152, 152);
    }
    a:focus,
    a:hover {
      color: #E5C687;
      background: none;
      border-bottom: none;
    }

    a.active {
      color: #E5C687;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const StyledMobileNav = styled.aside`
  position: fixed;
  height: 100vh;
  width: min(75vw, 3500px);
  padding-top: min(40vh, 100px);
  padding-bottom: 50px;
  flex-direction: column;
  background-color: var(--light-bg);
  top: 0;
  right: 0;
  z-index: 10;
  outline: 0px;
  box-shadow: -10px 0px 30px -15px rgba(2,12,27,0.7);
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  transform: translateX(100vw);

  ${({ visible }) => visible ? `visibility: visible; transform: translateX(0vw);` : ``};
`;


const MobileNav = ({ activeLink, onLinkClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const handleLinkClick = (event) => {
    onLinkClick(event);
    setMenuOpen(false);
  };

  return (
    <StyledWrapper>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <BurgerButton isOpen={menuOpen} onMenuOpen={toggleMenu} />

      <StyledMobileNav visible={menuOpen} data-visible={menuOpen} aria-hidden={!menuOpen} tabindex="-1" id="mobile-menu">
        <ul>
          {
            navLinks && navLinks.map(({ name, url}, i) => (
              <li key={i}>
                <Link
                  onClick={handleLinkClick}
                  data-name={name}
                  className={activeLink === name ? 'active' : ''}
                  to={url}>{name}
                </Link>
              </li>
            ))
          }
        </ul>
      </StyledMobileNav>
    </StyledWrapper>
  )
}

export default MobileNav;