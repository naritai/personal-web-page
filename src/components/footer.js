import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 70px;
  margin-top: 100px;
  background-color: #000000;
  box-shadow: 0 -10px 30px -10px #0F1020;

  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  width: min(60%, 960px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCopyrightLink = styled.a`
  font-size: 0.8em;
  text-align: center;

  ${({ theme }) => theme.mixins.bottomDashedOutline };
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledCopyrightLink href="https://github.com/naritai/personal-website">
          Designed & built by Aleksandr Vorontsov
        </StyledCopyrightLink>
      </StyledWrapper>
    </StyledFooter>
  )
}

export default Footer;
