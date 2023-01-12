import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 600px;
  max-width: 700px;
  line-height: 1.2em;
  padding: 10px 0;

  a {
    ${({ theme }) => theme.mixins.bottomDashedOutline };
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
  }
`;


const Details = () => {
  return (
    <StyledWrapper>
      I’m a software engineer with 5+ years of experience.
      Focused on building robust and accessible products with intuitive UI. 
      Blog about front-end to <a href="https://t.me/frontendmetoo" aria-label="Telegram blog" target="_blank" rel="noopener noreferrer">t.me/frontendmetoo</a>.
    </StyledWrapper>
  )
};

export default Details;