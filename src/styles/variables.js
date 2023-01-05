import { css } from "styled-components";

const variables = css`
  :root {
    --main-bg: #0F1020;
    --light-bg: #1c1e3b;
    --main-text: #F6F1D1;
    --emphasize: #FFD400;
    --emphasize-soft: #E5C687;
    --selection-bg: #FFD4B2;
    --selection-text: #541212;
    --main-red: #CA4246;

    --nav-height: 80px;
    --nav-scroll-height: 80px;

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
    --ham-before: top 0.1s ease-in 0.25s,opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out,opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
    --ham-after-active: bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;

    --scroll-track: #464862;
    --red-transparent: rgba(167, 62, 56, 0.2);
    --promo-gradient: linear-gradient(90deg, rgba(202, 66, 71, 0.8), rgba(225, 102, 65, 0.8), rgba(215, 159, 86, 0.8));
  }
`;

export default variables;