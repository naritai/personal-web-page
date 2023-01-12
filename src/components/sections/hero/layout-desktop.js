import React from 'react';
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

const StyledWrapper = styled.div`
  width: 95%;
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

  .resume-button {
    align-self: flex-end;
    margin-right: 25px;
  }
`;

const HeroDesktopLayout = () => {
  return (
    <StyledWrapper>
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
            <StyledName>Alex vorontsov.</StyledName>
            <StyledSlogan>I craft projects for web.</StyledSlogan>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className='flex-wrapper'>
          <Details />
        </div>
      </div>

      <StyledResumeButton className='resume-button' href="/resume.pdf" aria-label="Resume">
        <span className="button-text">Resume</span>
      </StyledResumeButton>
    </StyledWrapper>
  )
}

export { HeroDesktopLayout };