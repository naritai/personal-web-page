import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .sparcle-svg {
    position: absolute;
    top: -30px;
    left: -290px;
  }

  #one {
    position: absolute;
    transform: translate(102%, 350%);
  }

  #two {
    position: absolute;
    transform: translate(213%, 270%);
  }
  .group {
    transform: translate(42.5px,42.5px);
  }
  path {
    transform: translate(-42.50px,-42.50px);
  }
  .large {
    animation: large 2s forwards 1s;
  }
  .large-2 {
    animation: large2 2s forwards 1s;
  }

  #two {
    path {
      transform: translate(-42.50px,-42.50px);
    }
    .small {
      animation: small 2s .81s forwards 1s;
      opacity: 0;
    }
    .large {
      animation: large 2s .81s forwards 1s;
      opacity: 0;
    }
    .large-2 {
      animation: large2 2s .81s forwards 1s;
      opacity: 0;
    }
  }

  .small {
    animation: small 2.5s forwards 1s;
    opacity: 0;
  }

  @keyframes small {
    0% {
      opacity: 0;
      transform: rotate(0deg) scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(-360deg) scale(1.5);
    }
  }

  @keyframes large {
    0% {
      opacity: 0;
      transform: rotate(0deg) scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(360deg) scale(1.5);
    }
  }

  @keyframes large2 {
    0% {
      opacity: 0;
      transform: rotate(45deg) scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(405deg) scale(1.1);
    }
  }
`;


function Sparcle() {
  return (
    <StyledWrapper>
      <svg className='sparcle-svg' width="80" height="80" viewBox="0 0 100 100" id="one">
        <g class="group" opacity="0.8">
          <g class="large">
            <path id="large" d="M41.25,40 L42.5,10 L43.75,40 L45, 41.25 L75,42.5 L45,43.75
                      L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z " fill="#a42226" />
          </g>
          <g class="large-2" transform="rotate(45)">
            <use xlinkHref="#large" />
          </g>
          <g class="small">
            <path id="small" d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75
                            L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z" fill="#a42226" />
          </g>
        </g>
      </svg>
    </StyledWrapper>
  )
}

export { Sparcle };