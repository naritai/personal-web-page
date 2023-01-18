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

const BurgerButton = styled.button`
  display: block;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  margin-right: -20px;
  padding: 10px;
  padding-right: 15px;
  padding-left: 20px;
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

  .hamburger {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 35px;
  }

  .hamburger-inner {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0px;
    width: 40px;
    height: 5px;
    background-color: #a42226;

    ${({ isOpen }) =>
      isOpen
        ? css`
            transition: transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1)
              0.12s;
            transform: rotate(225deg);
          `
        : css`
            transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)
              0s;
            transform: rotate(0deg);
          `}
  }

  .hamburger-inner::before {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 5px;
    background-color: #a42226;
    ${({ isOpen }) => (isOpen ? beforeOpen : beforeClosed)};
  }

  .hamburger-inner::after {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 5px;
    background-color: #a42226;
    ${({ isOpen }) => (isOpen ? afterOpen : afterClosed)};
  }
`;

export default BurgerButton;
