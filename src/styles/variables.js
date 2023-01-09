import { css } from "styled-components";

const variables = css`
  :root {
    --main-bg: #0F1020;
    --light-bg: #16172b;
    --main-text: #F6F1D1;
    --emphasize: rgba(255, 213, 0, 0.9);
    --emphasize-soft: #E5C687;
    --selection-bg: #FFD4B2;
    --selection-text: #541212;
    --main-red: #CA4246;
    /* --period-bg: rgba(87, 126, 255, 0.25); */
    /* --period-bg: rgba(167, 62, 56, 0.25); */
    --period-bg: rgba(0, 142, 213, 0.3);

    
    --button-bg: rgba(0, 178, 202, 0.3);

    

    --special-link-bg: linear-gradient(
        120deg,
        rgba(202, 66, 71, 0.8) 33.333%,
        rgba(202, 66, 71, 0.8) 33.333%,
        rgba(225, 102, 65, 0.8) 33.333%,
        rgba(225, 102, 65, 0.8) 50%, 
        rgba(215, 159, 86, 0.8) 33.333%, 
        rgba(215, 159, 86, 0.8) 33.33%);


    --nav-height: 80px;
    --nav-scroll-height: 80px;

    --font-sans: 'Roboto', 'Arial', -apple-system, system-ui, sans-serif;
    --font-mono: 'SpaceMono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-promo: 'BebasNeue', 'Arial', -apple-system, system-ui, sans-serif;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --link-general: var(--emphasize-soft);
    --link-active: #8d6820;
    --link-inactive: rgb(155, 152, 152);
    --link-focus: var(--main-red);

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