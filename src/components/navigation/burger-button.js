import React from 'react';
import styled, { css } from 'styled-components';

const beforeOpen = css`
  width: 100%;
  top: 0px;
  opacity: 0;
  transition: var(--ham-before-active);
`;

const beforeClosed = css`
  width: 120%;
  top: -12px;
  opacity: 1;
  transition: var(--ham-before);
`;

const afterOpen = css`
  width: 100%;
  bottom: 0px;
  transform: rotate(-90deg);
  transition: var(--ham-after-active);
`;

const afterClosed = css`
  width: 80%;
  bottom: -12px;
  transform: rotate(0deg);
  transition: var(--ham-after);
`;

const Wrapper = styled.button`
  display: block;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  margin-right: -15px;
  padding: 15px;
  border: 0px;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  z-index: 11;

  &:hover {
    cursor: pointer;
  }

  /* TODO: move to Global styles and learn what it does */
  &:focus-visible {
    outline: 2px dashed #a42226;
    outline-offset: 3px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  .hamburger {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .hamburger-inner {
    position: absolute;
    top: 50%;
    right: 0px;
    width: 30px;
    height: 3px;
    border-radius: 4px;
    background-color: #a42226;

    ${({ isOpen }) => isOpen ? (
      `transition: transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
        transform: rotate(225deg);`
    ) : (
      `transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
        transform: rotate(0deg);`
    )}
  }

  .hamburger-inner::before {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 3px;
    border-radius: 4px;
    background-color: #a42226;
    ${({ isOpen }) => isOpen ? beforeOpen : beforeClosed};
  }

  .hamburger-inner::after {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 3px;
    border-radius: 4px;
    background-color: #a42226;
    ${({ isOpen }) => isOpen ? afterOpen : afterClosed};
  }
`;

const BurgerButton = ({ onMenuClick, isOpen }) => {
  return (
    <Wrapper 
      aria-controls="mobile-menu"
      aria-expanded="false"
      aria-label="menu"
      type="button"
      isOpen={isOpen}
      onClick={onMenuClick}
    >
      <div class="hamburger">
        <div class="hamburger-inner"></div>
      </div>
    </Wrapper>
  )
}

export default BurgerButton;