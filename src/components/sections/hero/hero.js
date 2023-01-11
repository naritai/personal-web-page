import React, { useEffect, useState } from 'react';
import { isMobileScreen } from '@utils/device-matcher';
import { HeroDesktopLayout } from './layout-desktop';
import { HeroMobileLayout } from './layout-mobile';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen);
  const handleScreenChange = () => setIsMobile(isMobileScreen());

  // TODO: use debouce or throttle

  useEffect(() => {
    window.addEventListener('resize', handleScreenChange);
    return () => window.removeEventListener('resize', handleScreenChange);
  }, [isMobile]);

  return isMobile ? <HeroMobileLayout /> : <HeroDesktopLayout />;
}

export default Hero;
