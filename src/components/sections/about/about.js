import React from 'react';
import styled from 'styled-components';
import avatar from '@images/avatar.jpg';
import Details from './details';

const StyledAboutSection = styled.section`
  display: flex;
  margin-bottom: 150px;
  margin-top: 150px;
  min-height: 275px;

  .about__left-column {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about__right-column {
    padding: 5px;
  }

  .about__text-wrapper {
    opacity: 0;
    animation: fadeInText 1s ease-out forwards;
  }

  .about__details {
    max-width: 565px;
    line-height: 1.2em;
  }

  .about__details--mobile {
    display: none;
  }

  @media only screen and (max-width: 1088px) {
    min-height: 300px;
    justify-content: center;

    .about__right-column {
      min-width: 450px;
    }

    .about__details {
      max-width: 420px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 80px;
    min-height: none;
    flex-direction: column-reverse;

    .about__left-column {
      margin: 0;
    }

    .about__right-column {
      min-width: 0;
    }

    #typewrite {
      display: none;
    }

    .about__details {
      width: 100%;
      max-width: none;
      font-size: 0.9em;
      margin: 0;
      margin-top: 5px;
      text-align: center;
      opacity: 0;
      animation: fadeInText 1.2s ease-out 1.2s forwards;
    }

    .about__details--mobile {
      display: block;
    }
  }
`;

const StyledAvatar = styled.img`
  margin-bottom: 15px;
  border-radius: 2px;
  object-fit: contain;
  filter: grayscale(70%);
  border: 2px solid #E5C687;
  box-shadow: inset 0 0 5px 5px rgba(218, 185, 139, 0.5), inset 0 0 12px 12px rgba(218, 183, 139, 0.5), 0 0 25px 25px rgba(250, 233, 222, 0.06);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: grayscale(0);
  }

  @media only screen and (max-width: 768px) {
    width: 270px;
    height: 270px;
    margin: 20px 0;
    filter: none;
    border-radius: 50%;
  }
`;

const StyledResumeButton = styled.a`
  ${({ theme }) => theme.mixins.button };
  && {
    color: #0F1020;
  }
`;

const StyledGreeting = styled.p`
  position: relative;
  width: 200px;
  min-height: 30px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 10px;
  
  text-shadow: 0 0 1px #F6F1D1;
  color:#0F1020;
  text-align: center;
  font-size: 1.1em;
  white-space: nowrap;

  border-bottom: 2px solid #F6F1D1;
  border-radius: 2px;
  background-color: #F6F1D1;
  box-shadow: inset 0 4px 8px rgba(253, 168, 168, 0.3), inset 0 8px 12px rgba(250, 163, 163, 0.06);
  opacity: 0;
  animation: fadeInText 0.75s ease-out 0.2s forwards;

  &::before {
    content: "";
    border-style: solid;
    border-width: 30px 20px 5px 0;
    border-color: #F6F1D1 transparent transparent transparent;
    position: absolute;
    left: -3px;
    bottom: -30px;
    transform: rotate(20deg);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    color: #F6F1D1;
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
    -webkit-text-fill-color: #541212;
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

const About = () => {
  return (
    <StyledAboutSection id="about">
      <div className="about__left-column">
        <StyledAvatar src={avatar} alt="Main avatar" width="220" height="200" />
        <StyledResumeButton href="/Aleksandr_Vorontsov_CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
          <span className="button-text">Resume</span>
        </StyledResumeButton>
      </div>

      <div className="about__right-column">
        <div className="about__text-wrapper">
          <StyledGreeting>Hi, my name is</StyledGreeting>
          <StyledName>Alex vorontsov.</StyledName>
          <StyledSlogan>I craft projects for web.</StyledSlogan>
          <Details />
        </div>
      </div>
    </StyledAboutSection>
  )
}

export default About;
