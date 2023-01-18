import React from 'react';
import styled from 'styled-components';
import { Side } from '@components/side';

const StyledCopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--border-color);
  }
`;

const StyledCopyrightLink = styled.a`
  margin: 20px auto;
  padding: 10px;
  font-family: var(--font-mono);
  font-size: 0.55em;
  line-height: 0.8em;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

function Copyright({ isHome }) {
  return (
    <Side isHome={isHome} orientation="right">
      <StyledCopyrightWrapper>
        <StyledCopyrightLink href="https://github.com/naritai/personal-website">
          Designed & built by Aleksandr Voronetskiy
        </StyledCopyrightLink>
      </StyledCopyrightWrapper>
    </Side>
  );
}

export { Copyright };
