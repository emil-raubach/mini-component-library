/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: { width: 370, height: 8, padding: 0 },
  medium: { width: 370, height: 12, padding: 0 },
  large: { width: 370, height: 24, padding: 4 },
};

const ProgressBar = ({ value, size }) => {
  const styles = sizes[size];

  return (
    <div>
      <Label id="loadinglabel">Loading</Label>
      <span
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
      >
        <Container
          width={styles.width}
          height={styles.height}
          style={{ '--padding': styles.padding + 'px' }}
        >
          <rect
            height={styles.height}
            width={styles.width}
            fill={COLORS.gray50}
          />
          <rect
            height={styles.height}
            width={(styles.width / 100) * value}
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
  padding: var(--padding);
`;

export default ProgressBar;
