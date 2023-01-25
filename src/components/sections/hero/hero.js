import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from '@hooks';
import { HeroDesktopLayout } from './layout-desktop';
import { HeroMobileLayout } from './layout-mobile';

const StyledWrapper = styled.div`
  width: 95%;
`;

function Hero() {
  const isMobile = useMediaQuery('only screen and (max-width: 767.99px)');

  return (
    <StyledWrapper>
     {isMobile ? <HeroMobileLayout /> : <HeroDesktopLayout />}
    </StyledWrapper>
  );
}

export default Hero;
