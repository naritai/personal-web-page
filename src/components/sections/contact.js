import React from 'react';
import styled from 'styled-components';
import contactBG from '@images/contacts-bg.png';
import { IconGithub, IconLinkedIn, IconTelegram, IconTwitter } from '@components/icons';

const StyledContactSection = styled.section`
  .contact__line {
    margin-bottom: 30px;
    margin-top: -15px;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;

    .contact__line {
      margin-bottom: 15px;
    }
  }
`;

const StyledWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 50px;
    margin-bottom: 3px;
    border-radius: 3px;
    z-index: 100;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      /* linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%,rgba(255,255,255,0.8) 60%,rgba(255,255,255,1) 100%), */
      background-image: url(${contactBG});
      top: 0;
      left: 0;
      opacity: 0.5;
      z-index: -100;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 10px 5px;
    }
`;

const StyledGetInTouch = styled.p`
  max-width: 500px;
  margin: 0;
  margin-right: 10px;
  padding: 10px;
  border-radius: 3px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: none;
    font-size: 0.9em;
    line-height: 1.2em;
    text-align: center;
  }
`;

const StyledEmailLink = styled.a`
  display: inline-block;
  padding: 5px 0;
  color: #FFD400;
  font-weight: bold;

  ${({ theme }) => theme.mixins.bottomDashedOutline };
`;

const StyledSocialLinks = styled.div`
  transition: all 0.5s cubic-bezier(0.645,0.045,0.355,1);
  border-radius: 3px;
  padding: 2px;

  ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    -webkit-box-align: center;
    align-items: center;

    a {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      padding: 5px;
      margin: 5px;

      text-decoration: none;
      text-decoration-skip-ink: auto;
      font-family: var(--font-mono);
      font-size: 0.65em;
      letter-spacing: 0.1em;  
      color: #E5C687;
      cursor: pointer;

      transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    }

    a:hover {
      border: none;
      transform: translateY(-3px);
    }
    a:hover .links-list__image {
      stroke: #ffffff;
    }
    a:focus {
      border: none;
    }

    .links-list__image {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  }

  
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    width: 100%;

    ul {
      width: 100%;
      max-width: 400px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="heading">Get In Touch</h2>
      <hr className="horizontal-line contact__line" />

      <StyledWrapper>
        <StyledGetInTouch>
          My inbox is always open. <br /> Whether you have a question or just want to say hi, I’ll try my best to get back to you! <br />
          <StyledEmailLink href="mailto:alexandr.voronetskiy@gmail.com">alexandr.voronetskiy@gmail.com</StyledEmailLink>
        </StyledGetInTouch>     

        <StyledSocialLinks>
          <ul>
            <li>
              <a href="https://github.com/naritai" aria-label="GitHub">
                <IconGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aleksandr-vorontsov" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dzhumandzhu" aria-label="Twitter">
              <IconTwitter />
              </a>
            </li>
            <li>
              <a href="https://t.me/voronetskiy" aria-label="Telegram">
                <IconTelegram />
              </a>
            </li>            
          </ul>
        </StyledSocialLinks>
      </StyledWrapper>
    </StyledContactSection>
  )
};

export { Contact };