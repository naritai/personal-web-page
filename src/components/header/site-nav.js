import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import PropTypes from 'prop-types';
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
    }

    li::before {
      content: '0' counter(item) '.';
      display: inline-block;
      margin-right: 5px;
      text-align: right;
      color: #e5c687;
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
      color: #e5c687;
      background: none;
      border-bottom: none;
    }

    a.active {
      color: #e5c687;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const WithFadeEffect = styled.div`
  ${({ disable }) =>
    disable
      ? ''
      : css`
          opacity: 0;
          transform: translateY(-5px);
        `}
  // move increment from li (above) to fix counter
  counter-increment: item 1;
  animation: ${({ name, delay }) => `${name}  0.25s ease-out ${delay} forwards`};
`;

function SiteNav({ onLinkClick, activeLink, isHome }) {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Wrapper>
      <ul>
        {isMounted &&
          navLinks &&
          navLinks.map(({ name, url }, i) => (
            <WithFadeEffect delay={`0.${i + 1}s`} name="fadeUp" disable={!isHome}>
              <li key={i} style={{ transitionDelay: `${i * 1}00ms` }}>
                <Link
                  onClick={onLinkClick}
                  data-name={name}
                  className={activeLink === name ? 'active' : ''}
                  to={url}
                >
                  {name}
                </Link>
              </li>
            </WithFadeEffect>
          ))}
      </ul>
    </Wrapper>
  );
}

SiteNav.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  activeLink: PropTypes.string,
  isHome: PropTypes.bool,
};

SiteNav.defaultProps = {
  activeLink: '',
  isHome: true,
};

export default SiteNav;
