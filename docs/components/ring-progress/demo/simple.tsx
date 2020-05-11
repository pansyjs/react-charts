import React, { FC } from 'react';
// @ts-ignore
import { RingProgress } from '@pansy/react-charts';

const Example: FC = () => {
  return (
    <RingProgress
      width={56}
      height={56}
      size={12}
      percent={0.3}
      progressStyle={{
        lineWidth: '15px',
        stroke: 'red'
      }}
    />
  );
};

export default Example;
