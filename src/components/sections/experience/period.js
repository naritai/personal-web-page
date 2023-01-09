import React from 'react';
import styled from 'styled-components';

const StyledPeriod = styled.span`
  position: relative;
  width: 225px;
  max-width: 240px;
  height: 60px;
  padding: 2px;
  padding-top: 5px;
  margin-top: 5px;
  margin-right: 15px;
  margin-bottom: auto;
  display: inline-block;

  text-align: center;
  color: #ffffff;
  font-size: 3em;
  font-family: var(--font-promo);
  background-color: var(--period-bg);

  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;


  &::before {
    content: "";
    position: absolute;
    left: -30px;
    top: 0;
    height: 100%;
    border-style: solid;
    border-width: 30px 0 30px 30px;
    border-color: var(--period-bg) transparent var(--period-bg) transparent;
  }

  @media only screen and (max-width: 768px) {
    padding: 2px;
    margin-top: 0;
    width: 55px;
    min-height: 50px;
    font-size: 1.5em;
    border: 1px solid #ffffff;

    &::before {
      display: none;
    }

    .company-details__period-delimeter {
      display: none;
    }
  }
`;

const Period = ({ period }) => {
  const [start, end] = period.split('-');
  return (
    <StyledPeriod>
      {start} <b className="company-details__period-delimeter">-</b> {end}
    </StyledPeriod>
  )
}

export { Period };