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

  background-color: #FFD400;
  background-image: url(${buttonBgDark});
  background-repeat: no-repeat;
  background-position: 400%;
  background-size: 140%;
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

  bottomDashedOutline: css`
    &:focus {
      outline: none;
      border: none;
    }
    &:focus-visible {
      outline: none;
      border: none;
    }
    & {
      position: relative;
    }

    &:focus::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: transparent;
      border-bottom: 2px dashed var(--link-focus);
    }
    &:focus:not(:focus-visible)::after {
      display: none;
    }
    &:focus-visible::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: transparent;
      border-bottom: 2px dashed var(--link-focus);
    }
  `,

  button,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  promoHeading: css`
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    vertical-align: bottom;
    letter-spacing: 2.5px;
    font-weight: bold;
    font-size: 3em;
    font-family: var(--font-promo);

    @media only screen and (max-width: 768px) {
      font-size: 1.9em;
      letter-spacing: 2px;
    }
  `,

  promoHeadingBright: css`
    color: #eec700;
  `,

  promoHeadingGradient: css`
    background-color: #bc9664;
    background-image: linear-gradient(90deg, rgba(202, 66, 71, 0.8), rgba(225, 102, 65, 0.8), rgba(215, 159, 86, 0.8));
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  `
}

export { mixins };