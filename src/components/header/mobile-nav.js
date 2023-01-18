import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { navLinks } from '@config';
import { Link } from 'gatsby';
import BurgerButton from './burger-button';
import { Helmet } from 'react-helmet';
import { useOnClickOutside } from '@hooks';
import { KEY_CODES } from '@utils';

const StyledWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }

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
      font-size: clamp(1em, 8vw, 1.5em);
      font-weight: 700;
      counter-increment: item 1;
    }

    a {
      width: 100%;
      text-align: center;
      color: rgb(155, 152, 152);
      text-decoration: none;
      outline: none;
      padding: 5px;
      vertical-align: middle;
    }

    a::before {
      content: '0' counter(item) '.';
      display: inline-block;
      margin-right: 5px;
      padding: 3px 0 10px;
      text-align: right;
      color: #e5c687;
    }

    a:visited {
      color: rgb(155, 152, 152);
    }
    a:focus,
    a:hover {
      color: #e5c687;
      background: none;
      border-bottom: none;
    }

    a.active {
      color: #e5c687;
    }
  }
`;

const StyledSidebar = styled.aside`
  position: fixed;
  height: 100vh;
  width: min(75vw, 350px);
  padding-top: min(40vh, 100px);
  padding-bottom: 50px;
  background-color: var(--main-bg-soft);
  top: 0;
  right: 0;
  z-index: 10;
  outline: 0px;
  box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateX(${({ visible }) => (visible ? 0 : 100)}vw);
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const MobileNav = ({ activeLink, onLinkClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const handleLinkClick = (event) => {
    onLinkClick(event);
    setMenuOpen(false);
  };

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    menuFocusables = [
      buttonRef.current,
      ...Array.from(navRef.current.querySelectorAll('a')),
    ];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (event) => {
    if (document.activeElement === firstFocusableEl) {
      event.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (event) => {
    if (document.activeElement === lastFocusableEl) {
      event.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (event) => {
    if (event.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <StyledWrapper>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <BurgerButton
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label="menu"
          type="button"
          isOpen={menuOpen}
          onClick={toggleMenu}
          ref={buttonRef}
        >
          <span className="hamburger">
            <span className="hamburger-inner"></span>
          </span>
        </BurgerButton>

        <StyledSidebar
          ref={navRef}
          visible={menuOpen}
          data-visible={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
          id="mobile-menu"
        >
          <ul>
            {navLinks &&
              navLinks.map(({ name, url }, i) => (
                <li key={i}>
                  <Link
                    onClick={handleLinkClick}
                    data-name={name}
                    className={activeLink === name ? 'active' : ''}
                    to={url}
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
        </StyledSidebar>
      </div>
    </StyledWrapper>
  );
};

export default MobileNav;
