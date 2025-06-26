/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: { width: 370, height: 8 },
  medium: { width: 370, height: 12 },
  large: { width: 370, height: 24 },
};

const ProgressBar = ({ value, size }) => {
  return (
    <div>
      <Label id="loadinglabel">Loading</Label>
      <span
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
      >
        <Container width={sizes.large.width} height={sizes.large.height}>
          <rect
            height={sizes.large.height}
            width={sizes.large.width}
            fill={COLORS.gray50}
          />
          <rect
            height={sizes.large.height}
            width={(sizes.large.width / 100) * value}
            fill={COLORS.primary}
          />
        </Container>
      </span>
    </div>
  );
};

const Label = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-inline-end: 4rem;
  text-align: center;
`;

const Container = styled.svg`
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: 4px;
`;

export default ProgressBar;
