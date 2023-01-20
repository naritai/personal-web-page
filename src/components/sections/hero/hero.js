import React from 'react';
import styled from 'styled-components';
import { HeroDesktopLayout } from './layout-desktop';
import { HeroMobileLayout } from './layout-mobile';

const StyledWrapper = styled.div`
  width: 95%;
`;

const StyledMobileLayout = styled.div`
  display: none;
  @media only screen and (max-width: 767.99px) {
    width: 100%;
    display: block;
  }
`;

const StyledDesktopLayout = styled.div`
  display: none;
  @media only screen and (min-width: 768.01px) {
    width: 100%;
    display: block;
  }
`;

function Hero() {
  return (
    <StyledWrapper>
      <StyledMobileLayout>
        <HeroMobileLayout />
      </StyledMobileLayout>
      <StyledDesktopLayout>
        <HeroDesktopLayout />
      </StyledDesktopLayout>
    </StyledWrapper>
  );
}

export default Hero;
