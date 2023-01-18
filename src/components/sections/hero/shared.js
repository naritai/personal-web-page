import styled from 'styled-components';

const StyledAvatar = styled.div`
  .avatar-img {
    object-fit: contain;
  }

  .wrapper-img {
    width: 240px;
    height: 220px;

    @media only screen and (max-width: 768px) {
      width: clamp(270px, 80vw, 350px);
      height: clamp(270px, 80vw, 350px);
      margin-bottom: 20px;
      filter: none;

      transition: all 0.5s;

      background-color: var(--hero-bg);
      border-radius: 50%;
      border: 4px solid var(--border-color);
    }
  }
`;

const StyledGreeting = styled.p`
  position: relative;
  width: 120px;
  min-height: 30px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 10px;

  text-shadow: 0 0 1px var(--main-text);
  color: #0f1020;
  text-align: center;
  font-size: clamp(0.8em, 8vw, 1.1em);

  border: 2px solid var(--main-text);
  border-radius: 2px;
  background-color: var(--main-text);
  box-shadow: inset 0 4px 8px rgba(253, 168, 168, 0.3),
    inset 0 8px 12px rgba(250, 163, 163, 0.06);

  &::before {
    content: '';
    border-style: solid;
    border-width: 30px 20px 5px 0;
    border-color: var(--main-text) transparent transparent transparent;
    position: absolute;
    left: -6px;
    bottom: -30px;
    transform: rotate(20deg);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    color: var(--main-text);

    &::before {
      display: none;
    }
  }
`;

const StyledName = styled.h1`
  ${({ theme }) => theme.mixins.promoHeading};
  ${({ theme }) => theme.mixins.promoHeadingBright};

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const StyledSlogan = styled.p`
  ${({ theme }) => theme.mixins.promoHeading};
  ${({ theme }) => theme.mixins.promoHeadingGradient};

  font-size: 2.6em;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const StyledResumeButton = styled.a`
  ${({ theme }) => theme.mixins.button};

  && {
    height: 70px;
    width: 260px;
    border: 4px solid var(--border-color);
    transform: skew(-5deg);
  }

  &&:hover {
    border: 4px solid var(--emphasize-soft);
  }

  .button-text {
    transform: skew(5deg);
    font-size: 2.5em;
    color: #ffffff;
  }

  @media only screen and (max-width: 768px) {
    && {
      height: 65px;
      width: clamp(265px, 65vw, 300px);
    }

    .button-text {
      font-size: 2.2em;
    }
  }
`;

export {
  StyledAvatar,
  StyledGreeting,
  StyledName,
  StyledSlogan,
  StyledResumeButton,
};
