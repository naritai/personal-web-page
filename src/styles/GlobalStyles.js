import { createGlobalStyle } from "styled-components";
import mainBackground from '@images/main-bg.jpg';
import variables from "./variables";
import fonts from "./fonts";
import TransitionStyles from "./TransitionStyles";
import normalize from 'normalize.css';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${fonts};
  ${variables};

  ::selection {
    background: var(--selection-bg);
    color: var(--selection-text);
    text-shadow: none;
  }
  ::-webkit-selection {
    background: var(--selection-bg);
    color: var(--selection-text);
    text-shadow: none;
  }
  ::-moz-selection {
    background: var(--selection-bg);
    color: var(--selection-text);
    text-shadow: none;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: var(--scroll-track);
  }
  ::-webkit-scrollbar-button {
    background: var(--emphasize-soft);
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--emphasize-soft);
    border-radius: 10px;
  }

  /* Default focus styles.*/
  :focus {
    outline: 2px dashed #a42226;
    outline-offset: 2px;
  }
  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }
  :focus-visible {
    outline: 2px dashed #a42226;
    outline-offset: 2px;
  }

  html {
    height: 100vh;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;

    background-color: var(--main-bg);
    background: url(${mainBackground});
    background-repeat: repeat;
    background-size: cover;
    background-position: top center;  

    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 100;
    color: var(--main-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    outline: none;
    text-decoration: none;

    &:link,
    &:visited {
      color: var(--link-general);
    }
    &:focus,
    &:hover {
      border-bottom: 1px solid var(--link-focus);
      border-radius: 2px;
    }
    &:active {
      color: var(--link-active);
    }
  }

  .horizontal-line {
    border-color: var(--main-red);
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(240, 232, 158, 0.5);
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;

    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .skip-to-content {
    color: var(--emphasize);
    background-color: transparent;
    border: 1px solid var(--link-focus);
    border-radius: 4px;
    font-size: 1em;
    line-height: 1;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    padding: 1.15rem 1.55rem;
    position: absolute;
    top: auto;
    left: -888px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -88;
    outline: none;

    &:focus {
      background-color: var(--emphasize);
      color: var(--link-focus);
      top: 0px;
      left: 0px;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 88;
      }
  }

  /* Animations */
  @keyframes fadeInText {
    100% {
      opacity: 1;
    }
  }

  ${TransitionStyles};
`;

export default GlobalStyle;
