import { css } from 'styled-components';

const variables = css`
  :root {
    --main-bg: #0f1020;
    --main-bg-soft: #16172b;
    --main-text: #f6f1d1;
    --emphasize-soft: #e5c687;
    --selection-bg: #ffd4b2;
    --selection-text: #541212;
    --bg-emphasize: #ca4246;
    --period-bg: rgba(60, 110, 113, 0.5);
    --hero-bg: rgba(60, 110, 113, 0.4);
    --hero-bg-soft: rgba(60, 110, 113, 0.3);
    --border-color: #cecece;

    --raw-red: #a42226;
    --main-red: rgba(202, 66, 71, 0.8);
    --main-orange: rgba(225, 102, 65, 0.8);
    --main-yellow: rgba(215, 159, 86, 0.8);

    --nav-height: 70px;
    --nav-scroll-height: 70px;

    --font-sans: 'Roboto', 'Arial', -apple-system, system-ui, sans-serif;
    --font-mono: 'SpaceMono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-promo: 'BebasNeue', 'Arial', -apple-system, system-ui, sans-serif;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --link-general: var(--emphasize-soft);
    --link-active: #8d6820;
    --link-inactive: rgb(155, 152, 152);
    --link-focus: var(--main-red);
    --special-link-bg: linear-gradient(
      120deg,
      var(--main-red) 33.333%,
      var(--main-red) 33.333%,
      var(--main-orange) 33.333%,
      var(--main-orange) 50%,
      var(--main-yellow) 33.333%,
      var(--main-yellow) 33.33%
    );

    --ham-color: var(--raw-red);
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

    --scroll-track: #464862;
    --promo-gradient: linear-gradient(
      90deg,
      rgba(202, 66, 71, 0.8),
      rgba(225, 102, 65, 0.8),
      rgba(215, 159, 86, 0.8)
    );
  }
`;

export default variables;
