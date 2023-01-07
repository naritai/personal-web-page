import React from 'react';
import styled from 'styled-components';
import TypeIt from 'typeit-react';
import { writeCustomDetails, typewriterOptions } from './typewriter';

const StyledWrapper = styled.div`
  .about__details {
    max-width: 540px;
    line-height: 1.2em;

    a {
      ${({ theme }) => theme.mixins.bottomDashedOutline };
    }
  }

  .about__details--mobile {
    display: none;
  }

  @media only screen and (max-width: 1088px) {
    .about__details {
      max-width: 460px;
    }
  }

  @media only screen and (max-width: 768px) {
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


const Details = () => {
  return (
    <StyledWrapper>
      <p className="about__details" id="typewrite">
        <TypeIt getBeforeInit={writeCustomDetails} options={typewriterOptions} />
      </p>
      <p className="about__details about__details--mobile">
        I’m a software engineer with 5+ years of experience.
        Focused on building robust and accessible products with intuitive UI. 
        Blog about front-end to <a href="https://t.me/frontendmetoo" aria-label="Telegram blog" target="_blank" rel="noopener noreferrer">t.me/frontendmetoo</a>.
      </p>
      <noscript>
        <p className="about__details">
          I’m a software developer with 5+ years of experience.
          Focused on building robust and accessible products with intuitive UI. 
          Blog about front-end to <a href="https://t.me/frontendmetoo" aria-label="Telegram blog" target="_blank" rel="noopener noreferrer">t.me/frontendmetoo</a>.
        </p>
      </noscript>
    </StyledWrapper>
  )
}

export default Details;