import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  ${({ top, left, bottom, right }) => {
    return `
      top: ${top ? top : 'auto'};
      left: ${left ? left : 'auto'};
      bottom: ${bottom ? bottom : 'auto'};
      right: ${right ? right : 'auto'};
    `;
  }}

  .sparcle-svg {
    position: absolute;
    transform: translate(102%, 350%);
    animation: fade forwards 2s;
  }
  .group {
    transform: translate(42.5px,42.5px);
  }
  path {
    transform: translate(-42.50px,-42.50px);
  }
  .small {
    animation: smallSparcle 3s forwards 0.2s;
  }
  .middle {
    animation: largeSparcle2 3s forwards 0.2s;
  }
  .large {
    animation: largeSparcle 3s forwards 0.2s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      display: none;
    }
    100% {
      opacity: 1;
      display: block;
    }
  }
`;

function Sparcle({ color1, color2, size, coords, fadeDelay }) {
  const { top, left, bottom, right } = coords;
  return (
    <StyledWrapper top={top} left={left} bottom={bottom} right={right} fadeDelay={fadeDelay}>
      <svg className='sparcle-svg' width={size} height={size} viewBox="0 0 100 100">
        <g class="group" opacity="0.8">
          <g class="large">
            <path id="large" d="M41.25,40 L42.5,10 L43.75,40 L45, 41.25 L75,42.5 L45,43.75
              L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z " fill={color1} />
          </g>
          <g class="middle" transform="rotate(45)">
            <use xlinkHref="#large" fill={color2} />
          </g>
          <g class="small">
            <path id="small" d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75
              L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z" fill={color2} />
          </g>
        </g>
      </svg>
    </StyledWrapper>
  )
}

export { Sparcle };