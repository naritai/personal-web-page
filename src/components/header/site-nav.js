import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '@config';
import { NAV_DELAY } from '../../utils/constants';

const Wrapper = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;

    li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 14px;
      padding-bottom: 14px;
      padding: 9px 15px;
      margin-right: 15px;
      font-size: 1em;
      font-weight: 700;

      counter-increment: item 1;
    }

    li::before {
      content: "0" counter(item) ".";
      display: inline-block;
      margin-right: 5px;
      text-align: right;
      color: #E5C687;
    }

    li:last-child {
      margin-right: 0;
    }

    a,
    a:visited {
      color: rgb(155, 152, 152);
      text-decoration: none;
      outline: none;
      color: var(--main-text);
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
    display: none;
  }
`;

const SiteNav = ({ onLinkClick, activeLink }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () =>  clearTimeout(timeout);
  }, []);

  return (
    <Wrapper>
      <ul>
        <TransitionGroup component={null}>
          { isMounted &&
            navLinks &&
            navLinks.map(({ name, url}, i) => (
              <CSSTransition key={i} classNames='fadedown' timeout={NAV_DELAY}>
                <li key={i} style={{ transitionDelay: `${i * 1}00ms` }}>
                  <Link
                    onClick={onLinkClick}
                    data-name={name}
                    className={activeLink === name ? 'active' : ''}
                    to={url}>{name}
                  </Link>
                </li>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </ul>
    </Wrapper>
  )
}

export default SiteNav;
