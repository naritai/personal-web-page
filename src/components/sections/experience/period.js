import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPeriod = styled.div`
  position: relative;
  width: 225px;
  max-width: 240px;
  height: 60px;
  padding: 2px;
  margin-top: 5px;
  margin-right: 15px;
  margin-bottom: auto;
  display: inline-block;

  text-align: center;
  color: #ffffff;
  font-size: 3em;
  font-family: var(--font-promo);
  background-color: var(--hero-bg-soft);

  border: 4px solid #b33b06;
  transform: skew(-5deg);

  .period-text {
    transform: skew(5deg);
  }

  &::before {
    content: '';
    position: absolute;
    left: -45px;
    top: 0;
    height: 100%;
    width: 40px;
    border-style: solid;
    border-width: 30px 0 30px 30px;
    border-color: #b33b06 transparent #b33b06 transparent;
  }

  @media only screen and (max-width: 768px) {
    padding: 2px;
    margin-top: 0;
    width: 55px;
    min-height: 50px;
    font-size: 1.5em;
    border: 1px solid transparent;

    box-shadow: 0 0 2px 2px rgba(202, 66, 71, 0.8), 0 0 3px 4px rgba(202, 66, 71, 0.8);
    transform: none;

    .period-text {
      transform: none;
    }

    &::before {
      display: none;
    }

    .company-details__period-delimeter {
      display: none;
    }
  }
`;

function Period({ period }) {
  const [start, end] = period.split('-');
  return (
    <StyledPeriod>
      <div className="period-text">
        {start} <b className="company-details__period-delimeter">-</b> {end}
      </div>
    </StyledPeriod>
  );
}

Period.propTypes = {
  period: PropTypes.string.isRequired,
};

export { Period };
