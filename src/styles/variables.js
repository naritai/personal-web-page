import { css } from "styled-components";

const variables = css`
  :root {
    --main-bg: #0F1020;
    --main-text: #F6F1D1;
    --emphasize: #FFD400;
    --emphasize-soft: #E5C687;
    --selection-bg: #FFD4B2;
    --selection-text: #541212;
    --main-red: #CA4246;

    --link-general: var(--emphasize-soft);
    --link-active: #8d6820;
    --link-inactive: rgb(155, 152, 152);
    --link-focus: var(--main-red);
    --link-gradient: linear-gradient(
      120deg,
      rgba(202, 66, 71, 0.8) 33.333%,
      rgba(202, 66, 71, 0.8) 33.333%,
      rgba(225, 102, 65, 0.8) 33.333%,
      rgba(225, 102, 65, 0.8) 50%, 
      rgba(215, 159, 86, 0.8) 33.333%, 
      rgba(215, 159, 86, 0.8) 33.33%);

    --ham-color: #a42226;
    --scroll-track: #464862;
    --red-transparent: rgba(167, 62, 56, 0.2);
    --promo-gradient: linear-gradient(90deg, rgba(202, 66, 71, 0.8), rgba(225, 102, 65, 0.8), rgba(215, 159, 86, 0.8));
  }
`;

export default variables;