import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypeIt from 'typeit-react';

const StyledWrapper = styled.div`
  .about__details {
    width: 600px;
    max-width: 700px;
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
      max-width: 520px;
    }
  }

  @media only screen and (max-width: 768px) {
    .about__details {
      width: 100%;
      max-width: none;
      margin-bottom: 15px;
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

    #typewrite {
      display: none;
    }
  }
`;


const Details = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <StyledWrapper>
      {isMounted && (
        <p className="about__details" id="typewrite">
          <TypeIt getBeforeInit={writeCustomDetails} options={typewriterOptions} />
        </p>)
      }
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
};

const writeCustomDetails = (instance) => {
  instance
    .type('I’m a software developer with 5+ years of experie')
    .pause(300)
    .type('nce. ')
    .pause(350)
    .type('Focused on building robust and a')
    .pause(350)
    .type('c')
    .pause(100)
    .type('c')
    .pause(30)
    .type('essible ')
    .pause(70)
    .type('products with')
    .pause(200)
    .type(' intuitive ')
    .pause(150)
    .type('UI. ')
    .pause(650)
    .type('Blog about front-end to <a href="https://t.me/frontendmetoo" aria-label="Telegram" target="_blank" rel="noopener noreferrer">t.me/frontendmetoo</a>.')

    return instance;
};

const typewriterOptions = {
  html: true,
  speed: 30,
  lifeLike: true,
  cursor: true,
  breakLines: true,
  waitUntilVisible: true,
  startDelay: 1000,
  nextStringDelay: 400,
  afterComplete: async (instance) => {
    setTimeout(() => {
      instance.destroy(true);
    }, 5000);
  },
};

export default Details;