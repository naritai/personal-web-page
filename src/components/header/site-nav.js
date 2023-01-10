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

      /* background-color: rgba(179, 58, 6); */
      /* border: 3px solid rgba(179, 58, 6); */
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
      /* padding-right: 30px; */
    }

    /* li:last-child::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      border-style: solid;
      border-width: 18px 0 18px 18px;
      border-color: #000000 transparent #000000 transparent;
    }
 */

    a,
    a:visited {
      color: rgb(155, 152, 152);
      text-decoration: none;
      outline: none;
      color: #F6F1D1;
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
