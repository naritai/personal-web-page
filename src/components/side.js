import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HERO_DELAY } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import PropTypes from 'prop-types';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: green;

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${(props) => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const WithFadeEffect = styled.div`
  opacity: 0;
  transform: translateY(35px);
  animation: ${({ name, delay }) => `${name}  0.85s ease-out ${delay} forwards`};
`;

function Side({ children, isHome, orientation }) {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), HERO_DELAY);
    return () => clearTimeout(timeout);
  }, [isHome, prefersReducedMotion]);

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        { children }
      ) : (
        <>
          {isMounted && (
            <WithFadeEffect delay="0.1s" name="fadeUp">
              {children}
            </WithFadeEffect>
          )}
        </>
      )}
    </StyledSideElement>
  );
}

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string.isRequired,
};

Side.defaultProps = {
  isHome: true,
};

export { Side };
