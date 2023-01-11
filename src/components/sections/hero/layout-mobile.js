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
  width: 100%;
  height: 80vh;
  margin-top: min(15vh, 135px);
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
    margin-top: 70px;
    padding-bottom: 0;

    .greenting {
      margin-bottom: 10px;
    }
    .resume-button {
      margin-top: -10px;
    }
  }
`;

const HeroMobileLayout = () => {
  return (
    <StyledWrapper>
      <div className='greenting'>
        <StyledGreeting>Hi, my name is</StyledGreeting>
        <StyledName>Alex vorontsov.</StyledName>
        <StyledSlogan>I craft projects for web.</StyledSlogan>
        <Details />
      </div>

      <div className='hero-bottom'>
        <StyledAvatar className='avatar'>
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
        <StyledResumeButton className='resume-button' href="/resume.pdf" aria-label="Resume">
          <span className="button-text">Resume</span>
        </StyledResumeButton>
      </div>
    </StyledWrapper>
  )
}

export { HeroMobileLayout };