import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Details from './details';
import { StaticImage } from 'gatsby-plugin-image';
import {
  StyledAvatar,
  StyledGreeting,
  StyledName,
  StyledSlogan,
  StyledResumeButton
} from './shared';
import { HERO_DELAY } from '../../../utils/constants';
import { usePrefersReducedMotion } from '@hooks';

const StyledWrapper = styled.div`
  width: 95%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  margin-top: 150px;
  padding: 0 10px;

  .hero-top {
    margin-bottom: 20px;
    padding: 0 10px;
    padding-top: 50px;
    border: 4px solid var(--border-color);
    background-color: var(--hero-bg);
    transform: skew(-5deg);

    .flex-wrapper {
      transform: skew(5deg);
      padding: 0 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }

  .hero-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100px;
    margin-bottom: 20px;
    padding: 0 10px;
    border: 4px solid var(--border-color);
    background-color: var(--hero-bg);
    transform: skew(-5deg);

    .flex-wrapper {
      display: flex;
      justify-content: center;
      transform: skew(5deg);
    }
  }

  .footer-flex {
    display: flex;
  }
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .resume-button {
    margin-right: 25px;
  }
`;

const WithFadeEffect = styled.div`
  opacity: 0;
  transform: translateY(-15px);
  animation: ${({ name, delay }) => `${name}  0.75s ease-out ${delay} forwards` };
`;

const HeroDesktopLayout = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), HERO_DELAY);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = (
    <div className="hero-top">
      <div className="flex-wrapper">
        <StyledAvatar className='avatar-flex-item'>
          <StaticImage
            src="../../../images/avatar.png"
            objectFit="contain"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Avatar"
            placeholder="blurred"
            loading="eager"
            className="wrapper-img"
            imgClassName="avatar-img"
          />
        </StyledAvatar>
        <div className='hero-text'>
          <StyledGreeting>Hi, my name is</StyledGreeting>
          <StyledName>Alex Voronetskiy.</StyledName>
          <StyledSlogan>I craft projects for web.</StyledSlogan>
        </div>
      </div>
    </div>
  );

  const two = (
    <div className="hero-bottom">
      <div className='flex-wrapper'>
      <Details />
      </div>
    </div>
  );

  const three = (
    <StyledFlexWrapper>
      <StyledResumeButton
        className='resume-button'
        href="/resume.pdf"
        aria-label="Resume"
        target="_blank"
        rel="noreferrer"
      >
        <span className="button-text">Resume</span>
      </StyledResumeButton>
    </StyledFlexWrapper>
  );

  const items = [one, two, three];

  return (

    <StyledWrapper>
      {
        prefersReducedMotion ? (
          <>
            {one}{two}{three}
          </>
        ) : (
          <>
            {
              isMounted &&
              items && items.map((item, i) => {
                return (
                  <WithFadeEffect delay={`0.${i + 1}s`} name='fadeUp'>
                    {item}
                  </WithFadeEffect>
                )
              })
            }
          </>
        )
      }
    </StyledWrapper>
  )
}

export { HeroDesktopLayout };
