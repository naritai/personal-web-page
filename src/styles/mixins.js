import { css } from 'styled-components';
import buttonBgDark from '@images/button-bg-dark.svg';

const button = css`
  position: relative;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  background-color: #b33b06;
  background-image: url(${buttonBgDark});
  background-repeat: no-repeat;
  background-position: 400%;
  background-size: 200%;
  border: 4px solid var(--border-color);

  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  .button-text {
    color: var(--main-text);
    font-size: 2em;
    letter-spacing: 3px;
    font-family: var(--font-promo);
    transition: color 0.6s;
  }

  &:hover .button-text {
    color: var(--main-red);
  }

  &:hover {
    background-position: 50%;
    border: 4px solid var(--emphasize-soft);
  }

  &:focus {
    color: var(--raw-red);
  }

  .button-text::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: var(--selection-text);
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
    white-space: nowrap;

    &::selection {
      -webkit-background-clip: none;
      -webkit-text-fill-color: var(--selection-text);
    }

    @media only screen and (max-width: 1088px) {
      white-space: normal;
    }

    @media only screen and (max-width: 768px) {
      letter-spacing: 2px;
      white-space: nowrap;
      font-size: 2.2em;
    }
  `,

  promoHeadingBright: css`
    color: #eec700;
  `,

  promoHeadingGradient: css`
    background-color: #bc9664;
    background-image: var(--promo-gradient);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  `,
};

export { mixins };
