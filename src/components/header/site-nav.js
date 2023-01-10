import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '@config';

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
  return (
    <Wrapper>
      <ul>
        {
          navLinks && navLinks.map(({ name, url}, i) => (
            <li key={i}>
              <Link
                onClick={onLinkClick}
                data-name={name}
                className={activeLink === name ? 'active' : ''}
                to={url}>{name}
              </Link>
            </li>
          ))
        }
      </ul>
    </Wrapper>
  )
}

export default SiteNav;
