import React from 'react';
import styled from 'styled-components';
import rocket from '@images/rocket_colored.png';

// DISABLED LINK
// .company-details__company-link--disabled {
//   background-color: rgba(93, 81, 81, 0.8);
//   background-size: 100%;
//   background-repeat: repeat;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   filter: grayscale(100%);
//   animation: none;
// }

// .company-details__company-link--disabled:hover {
//   animation: none;
// }

const StyledCompanyName = styled.h3`
  min-width: 220px;
  margin: 0;
  padding-top: 4px;
  display: inline-block;
  font-size: 3em;
  font-family: var(--font-promo);

  a {
    position: relative;
    background-color: #CA4246;
    background-image: linear-gradient(
        120deg,
        rgba(202, 66, 71, 0.8) 33.333%,
        rgba(202, 66, 71, 0.8) 33.333%,
        rgba(225, 102, 65, 0.8) 33.333%,
        rgba(225, 102, 65, 0.8) 50%, 
        rgba(215, 159, 86, 0.8) 33.333%, 
        rgba(215, 159, 86, 0.8) 33.33%);

    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow-text-simple-animation-rev 0.3s ease forwards;

    /* FIX FOCUS FOR LINK NAMES!!! */
    &:focus,
    &:focus-visible {
      border: none;
      outline: none;

      /* .link-text {
        ${({ theme}) => theme.mixins.bottomDashedOutline }
      } */
    }

    

    &:focus::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 80%;
      height: 1px;
      background-color: #CA4246;
    }

    &::selection {
      -webkit-background-clip: none;
      -webkit-text-fill-color: #541212;
    }
  }

  .rocket {
    width: 0.8em;
    height: 0.8em;
    display: inline-block;
    background-image: url(${rocket});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    filter: grayscale(100%);
    visibility: hidden;
  }

  a:hover {
    animation: rainbow-text-simple-animation 0.3s ease-in forwards;
    border: none;

    .rocket {
      animation: push-rocket 0.4s forwards;
    }
  }

  @media only screen and (max-width: 768px) {
    display: inline-block;

    a {
      animation: none;
    }

    a:hover,
    a:hover .rocket {
      animation: none;
    }

    .rocket {
      visibility: visible;
    }
  }

  @keyframes push-rocket {
    0% {
      transform: translate(-10px, 10px);
      visibility: hidden;
    }
    100% {
      transform: translate(0, 0);
      visibility: visible;
    }
  }

  @keyframes rainbow-text-simple-animation-rev {
    0% {
        background-size: 650%;
    }
    40% {
        background-size: 100%;
    }
    100% {
        background-size: 100%;
    }
  }

  @keyframes rainbow-text-simple-animation {
    0% {
        background-size: 100%;
    }
    80% {
        background-size: 650%;
    }
    100% {
        background-size: 650%;
    }
  }
`;

const CompanyLink = ({ url, text}) => {
  return (
    <StyledCompanyName>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="link-text">{text}</span>
        <span className="rocket"></span>
      </a>
    </StyledCompanyName>
  )
}

export { CompanyLink };