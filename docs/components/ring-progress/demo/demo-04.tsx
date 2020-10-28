import React from 'react';
import { RingProgress } from '@pansy/react-charts';
import { RingProgressConfig } from '@pansy/react-charts/es/ring-progress';

export default () => {
  const config: RingProgressConfig = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    innerRadius: 0.95,
    radius: 0.95
  };

  return <RingProgress {...config} />;
};
