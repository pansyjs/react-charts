import React, { FC } from 'react';
// @ts-ignore
import { RingProgress } from '@pansy/react-charts';

const Example: FC = () => {
  return <RingProgress width={56} height={56} percent={0.7} />;
};

export default Example;