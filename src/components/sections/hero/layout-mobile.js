import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { usePrefersReducedMotion } from '@hooks';
import Details from './details';
import {
  StyledAvatar,
  StyledGreeting,
  StyledName,
  StyledSlogan,
  StyledResumeButton,
} from './shared';

const StyledWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: min(20vh, 135px);
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .hero-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .greenting {
    margin-bottom: 20px;
  }

  /* Smartphone witn small height */
  @media only screen and (max-width: 400px) and (max-height: 667px) {
    height: 90vh;
    margin-top: min(25vh, 100px);
    padding-bottom: 0;

    .greenting {
      margin-bottom: 10px;
    }
    .resume-button {
      margin-top: -10px;
    }
  }
`;

const WithFadeEffect = styled.div`
  opacity: 0;
  animation: ${({ name, delay }) => `${name}  0.75s ease-out ${delay} forwards`};
`;

function HeroMobileLayout() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const one = <StyledGreeting>Hi, my name is</StyledGreeting>;
  const two = <StyledName>Alex Voronetskiy.</StyledName>;
  const three = <StyledSlogan>I craft projects for web.</StyledSlogan>;
  const four = <Details />;
  const items = [one, two, three, four];

  const heroBottom = (
    <div className="hero-bottom">
      <StyledAvatar className="avatar">
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
      <StyledResumeButton
        className="resume-button"
        href="/resume.pdf"
        aria-label="Resume"
        target="_blank"
        rel="noreferrer"
      >
        <span className="button-text">Resume</span>
      </StyledResumeButton>
    </div>
  );

  return (
    <StyledWrapper>
      {prefersReducedMotion ? (
        <>
          {one}
          {two}
          {three}
          {four}
          {heroBottom}
        </>
      ) : (
        <>
          <div className="greenting">
            {items &&
              items.map((item, i) => (
                <WithFadeEffect delay={`0.${i + 1}s`} name="fadeIn">
                  {item}
                </WithFadeEffect>
              ))}
          </div>
          <WithFadeEffect delay="0.5s" name="fadeIn">
            {heroBottom}
          </WithFadeEffect>
        </>
      )}
    </StyledWrapper>
  );
}

export { HeroMobileLayout };
