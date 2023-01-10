import React from 'react';
import styled from 'styled-components';
import Details from './details';
import { StaticImage } from 'gatsby-plugin-image';

const StyledWrapperTest = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  margin-top: 150px;

  .header {
    height: 250px;
    background-color: #eeae71;
    background-color: rgba(60, 110, 113, 0.3);
    transform: skew(-5deg);
    margin-bottom: 20px;
    padding-top: 50px;
    width: 92%;

    border: 4px solid #cecece;

    .header-inner {
      transform: skew(5deg);
      background-color: transparent;
      height: 100%;
      padding: 0 50px;

      .flex {
        display: flex;
      }

      .flex-column {
        padding: 10px;
        display: flex;
        flex-direction: column;
      }
    }
  }

  .footer {
    height: 100px;
    background-color: rgba(55, 113, 142, 0.3);
    transform: skew(-5deg);
    margin-bottom: 20px;
    width: 92%;
    border: 4px solid #cecece;


    .footer-inner {
      transform: skew(5deg);
      background-color: transparent;
      height: 100%;
      padding: 0 50px;

      .flex-column {
        display: flex;
      }
    }
  }

  .footer-flex {
    display: flex;
  }
`;

const StyledAvatar = styled.div`
  .avatar-img {
    object-fit: contain;
  }

  .wrapper-img {
    width: 220px;
    height: 200px;
    margin-top: -8px;

    @media only screen and (max-width: 768px) {
      width: 270px;
      height: 270px;
      margin: 20px 0;
      filter: none;
      border-radius: 50%;
    }
  }
`;

const StyledGreeting = styled.p`
  position: relative;
  width: 200px;
  min-height: 30px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 10px;
  
  text-shadow: 0 0 1px var(--main-text);
  color:#0F1020;
  text-align: center;
  font-size: 1.1em;

  border: 2px solid var(--main-text);
  border-radius: 2px;
  background-color: var(--main-text);
  box-shadow: inset 0 4px 8px rgba(253, 168, 168, 0.3), inset 0 8px 12px rgba(250, 163, 163, 0.06);
  opacity: 0;
  animation: fadeInText 0.75s ease-out 0.2s forwards;

  &::before {
    content: "";
    border-style: solid;
    border-width: 30px 20px 5px 0;
    border-color: var(--main-text) transparent transparent transparent;
    position: absolute;
    left: -6px;
    bottom: -30px;
    transform: rotate(20deg);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    color: var(--main-text);
    font-size: 1em;
    animation: fadeInText 0.75s ease-out 0.2s forwards;

    &::before {
      display: none;
    }
  }
`;

const StyledName = styled.h1`
  ${({ theme }) => theme.mixins.promoHeading };
  ${({ theme }) => theme.mixins.promoHeadingBright };

  opacity: 0;
  animation: fadeInText 0.75s ease-out 1.2s forwards;

  @media only screen and (max-width: 768px) {
    animation: fadeInText 0.75s ease-out 0.3s forwards;
    text-align: center;
  }
`;

const StyledSlogan = styled.p`
  ${({ theme }) => theme.mixins.promoHeading };
  ${({ theme }) => theme.mixins.promoHeadingGradient };

  opacity: 0;
  animation: fadeInText 0.75s ease-out 2.2s forwards;

  &::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: var(--selection-text);
  }

  @media only screen and (max-width: 1088px) {
    font-size: 2.5em;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.7em;
    animation: fadeInText 0.75s ease-out 0.4s forwards;
    text-align: center;
  }
`;

const StyledResumeButton = styled.a`
  ${({ theme }) => theme.mixins.button };

  && {
    height: 70px;
    width: 260px;
    border: 4px solid #cecece;
    transform: skew(-5deg);
  }

  &&:hover {
    border: 4px solid var(--emphasize-soft);
  }

  .button-text {
    transform: skew(5deg);
    font-size: 2.5em;
    color: #ffffff;
  }
`;

const Hero = () => {
  return (
    <>
      <StyledWrapperTest>
        <div className="header">
          <div className="header-inner">
            <div className="flex">
              <StyledAvatar>
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

              <div className="flex-column">
                <StyledGreeting>Hi, my name is</StyledGreeting>
                <StyledName>Alex vorontsov.</StyledName>
                <StyledSlogan>I craft projects for web.</StyledSlogan>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-flex'>
          <div className="footer">
            <div className='footer-inner'>
              <div className='flex-column'>
                <Details />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: '500px'}}>
          <StyledResumeButton href="/resume.pdf" aria-label="Resume">
            <span className="button-text">Resume</span>
          </StyledResumeButton>
        </div>
       
       
      </StyledWrapperTest>
    </>
  )
}

export default Hero;
