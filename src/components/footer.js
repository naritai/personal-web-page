import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #000000;
  box-shadow: 0 -10px 30px -10px #0f1020;
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  width: min(65%, 960px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCopyrightLink = styled.a`
  ${({ theme }) => theme.mixins.bottomDashedOutline};
  font-size: 0.5em;
  padding: 5px;
  padding-bottom: 20px;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledCopyrightLink href="https://github.com/naritai/personal-website">
          Designed & built by Aleksandr Voronetskiy
        </StyledCopyrightLink>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
