import React from 'react';
import styled from 'styled-components';
import rocket from '@images/rocket_colored.png';

const StyledCompanyName = styled.h3`
  min-width: 220px;
  margin: 0;
  padding-top: 4px;
  display: inline-block;
  font-size: 3em;
  font-family: var(--font-promo);
  padding-left: 5px;
  transform: skew(-5deg);

  .company-link {
    position: relative;
    background-color: var(--bg-emphasize);
    background-image: var(--special-link-bg);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow-text-simple-animation-rev 0.3s ease forwards;

    &:hover {
      animation: rainbow-text-simple-animation 0.3s ease-in forwards;
      border: none;
    }

    &:focus,
    &:focus-visible {
      border: none;
      outline: none;
    }

    // focus styling
    &:focus::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 80%;
      height: 1px;
      border-bottom: 2px dashed var(--link-focus);
    }

    .link-text {
      display: inline-block;
      margin-right: 10px;
    }
  }

  .company-link .link-text::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: var(--selection-text);
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

  .company-link:hover .rocket {
    animation: push-rocket 0.4s forwards;
  }

  .company-link--disabled {
    background-color: rgba(93, 81, 81, 0.8);
    background-image: var(--special-link-bg);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: grayscale(100%);
    animation: none;
  }

  .company-link--disabled:hover,
  .company-link--disabled:hover .rocket {
    animation: none;
  }

  @media only screen and (max-width: 768px) {
    display: inline-block;
    transform: none;

    .company-link:hover .rocket {
      animation: none;
    }
    .rocket {
      visibility: visible;
    }
    .company-link--disabled .rocket {
      display: none;
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

function CompanyLink({ url, text, disabled }) {
  return (
    <StyledCompanyName>
      {disabled ? (
        <span className="company-link company-link--disabled">
          <span className="link-text">{text}</span>
          <span className="rocket" />
        </span>
      ) : (
        <a className="company-link" href={url}>
          <span className="link-text">{text}</span>
          <span className="rocket" />
        </a>
      )}
    </StyledCompanyName>
  );
}

export { CompanyLink };
