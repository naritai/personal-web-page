import React, { useEffect, useState } from 'react';
import { isMobileScreen } from '@utils/device-matcher';
import { HeroDesktopLayout } from './layout-desktop';
import { HeroMobileLayout } from './layout-mobile';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen);
  const resizeHandler = () => setIsMobile(isMobileScreen());

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [isMobile]);

  return isMobile ? <HeroMobileLayout /> : <HeroDesktopLayout />;
};

export default Hero;
