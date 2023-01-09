import React from 'react';
import styled from 'styled-components';
import Details from './details';
import { StaticImage } from 'gatsby-plugin-image';
import buttonBgDark from '@images/button-bg-dark.svg';


const StyledHeroSection = styled.section`
  display: flex;
  margin-bottom: 150px;
  margin-top: 150px;
  min-height: 290px;

  .hero__left-column {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__right-column {
    padding: 0 5px;
  }

  .hero__text-wrapper {
    opacity: 0;
    animation: fadeInText 1s ease-out forwards;
  }

  .hero__details {
    max-width: 565px;
    line-height: 1.2em;
  }

  .hero__details--mobile {
    display: none;
  }

  @media only screen and (max-width: 1088px) {
    min-height: 300px;
    justify-content: center;

    .hero__right-column {
      min-width: 450px;
    }

    .hero__details {
      max-width: 420px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 80px;
    min-height: none;
    flex-direction: column-reverse;

    .hero__left-column {
      margin: 0;
    }

    .hero__right-column {
      min-width: 0;
    }

    #typewrite {
      display: none;
    }

    .hero__details {
      width: 100%;
      max-width: none;
      font-size: 0.9em;
      margin: 0;
      margin-top: 5px;
      text-align: center;
      opacity: 0;
      animation: fadeInText 1.2s ease-out 1.2s forwards;
    }

    .hero__details--mobile {
      display: block;
    }
  }
`;

const StyledAvatar = styled.div`
  .avatar-img {
    object-fit: contain;
  }

  .wrapper-img {
    width: 220px;
    height: 200px;
    /* margin-bottom: 20px;
    border-radius: 2px;
    filter: grayscale(70%);
    border: 2px solid #E5C687;
    box-shadow: inset 0 0 5px 5px rgba(218, 185, 139, 0.5), inset 0 0 12px 12px rgba(218, 183, 139, 0.5), 0 0 25px 25px rgba(250, 233, 222, 0.06);
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: grayscale(0);
    } */

    @media only screen and (max-width: 768px) {
      width: 270px;
      height: 270px;
      margin: 20px 0;
      filter: none;
      border-radius: 50%;
    }
  }
  
`;

const StyledResumeButton = styled.a`
  ${({ theme }) => theme.mixins.button };
  && {
    color: #0F1020;
    color: #ffffff;
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

  border: 2px solid #F6F1D1;
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
  /* ${({ theme }) => theme.mixins.promoHeadingBright }; */

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

const StyledWrapperTest = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  margin-top: 200px;

  .header {
    height: 200px;
    background-color: #eeae71;
    background-color: rgba(0, 142, 213, 0.3);
    transform: skew(10deg);
    margin-bottom: 20px;
    width: 92%;

    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.3), 0 0 3px 2px rgba(255, 255, 255, 0.3), 0 0 3px 5px rgba(255, 255, 255, 0.3);

    .header-inner {
      transform: skew(-10deg);
      background-color: transparent;
      height: 100%;
      padding: 0 75px;

      .flex {
        display: flex;
      }

      .flex-column {
        padding: 10px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
      }
    }
  }

  .footer {
    min-height: 110px;
    background-color: rgba(202, 66, 71, 0.5);
    transform: skew(-10deg);
    margin-left: -30px;
    margin-bottom: 20px;
    width: 75%;

    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.3), 0 0 3px 2px rgba(255, 255, 255, 0.3), 0 0 3px 5px rgba(255, 255, 255, 0.3);

    .footer-inner {
      transform: skew(10deg);
      background-color: transparent;
      height: 100%;
      padding-left: 25px;

      .flex-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .footer-flex {
    display: flex;
  }
`;

const StyledSpecialButton = styled.a`
  position: relative;
  height: 110px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  background-color: #B56B45;

  background-image: url(${buttonBgDark});
  background-repeat: no-repeat;
  background-position: 400%;
  background-size: 200%;
  border: 0.1px solid #ffffff;

  transition: all 0.5s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);

  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.3), 0 0 3px 2px rgba(255, 255, 255, 0.3), 0 0 3px 5px rgba(255, 255, 255, 0.3);

  margin-left: 20px;
  transform: skew(-10deg);

  .button-text {
    transform: skew(10deg);
    color: #F6F1D1;
    font-size: 2.5em;
    letter-spacing: 3px;
    font-family: var(--font-promo);
  }

  &:hover {
    background-position: 50%;
    border: 0.1px solid var(--emphasize);
  }

  &:focus {
    color: #a42226;
  }

  &:hover .button-text {
    background-color: #CA4246;
    background-image: linear-gradient(90deg, rgba(202, 66, 71, 0.8), rgba(225, 102, 65, 0.8), rgba(215, 159, 86, 0.8));
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .button-text::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: #541212;
  }

`;

const Hero = () => {
  // return (
  //   <StyledHeroSection id="hero">
  //     <div className="hero__left-column">
  //       <StyledAvatar>
  //         <StaticImage
  //           src="../../../images/avatar.jpg"
  //           objectFit="contain"
  //           quality={95}
  //           formats={['AUTO', 'WEBP', 'AVIF']}
  //           alt="Avatar"
  //           placeholder="blurred"
  //           loading="eager"
  //           className="wrapper-img"
  //           imgClassName="avatar-img"
  //         />
  //       </StyledAvatar>
  //       <StyledResumeButton href="/resume.pdf" aria-label="Resume">
  //         <span className="button-text">Resume</span>
  //       </StyledResumeButton>
  //     </div>

  //     <div className="hero__right-column">
  //       <div className="hero__text-wrapper">
  //         <StyledGreeting>Hi, my name is</StyledGreeting>
  //         <StyledName>Alex vorontsov.</StyledName>
  //         <StyledSlogan>I craft projects for web.</StyledSlogan>
  //         <Details />
  //       </div>
  //     </div>
  //   </StyledHeroSection>
  // )


  return (
    <>
      <StyledWrapperTest>
        <div className="header">
          <div className="header-inner">
            <div className="flex">
              <StyledAvatar>
                <StaticImage
                  src="../../../images/avatar.jpg"
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
          <StyledSpecialButton href="/resume.pdf" aria-label="Resume">
            <span className="button-text">Resume</span>
          </StyledSpecialButton>
        </div>
       
      </StyledWrapperTest>
    </>
  )
}

export default Hero;
