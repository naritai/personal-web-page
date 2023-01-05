import { css } from "styled-components";
import buttonBgDark from '@images/button-bg-dark.svg';

const button = css`
  position: relative;
  height: 45px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
  font-weight: 700;
  text-transform: uppercase;
  color: #0F1020;
  cursor: pointer;

  background-image: url(${buttonBgDark});
  background-repeat: no-repeat;
  background-position: 400%;
  background-size: 140%;
  background-color: #FFD400;
  border: 0.1px solid #FFD400;
  border-radius: 2px;

  transition: all 0.5s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);

  &:hover {
    background-position: 50%;
    border: 0.1px solid #FFD400;
  }

  &:focus {
    color: #a42226;
    border: 1px solid #a42226;
    border-radius: 2px;
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

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  button,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `
}

export { mixins };