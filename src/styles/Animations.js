const { css } = require("styled-components");

const Animations = css`
  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeUp {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Sparcles Animations */
  @keyframes smallSparcle {
    0% {
      opacity: 0;
      transform: rotate(0deg) scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(-360deg) scale(1.5);
    }
  }

  @keyframes largeSparcle {
    0% {
      opacity: 0;
      transform: rotate(0deg) scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(360deg) scale(1.5);
    }
  }

  @keyframes largeSparcle2 {
    0% {
      opacity: 0;
      transform: rotate(45deg) scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(405deg) scale(1.1);
    }
  }
`;

export { Animations };