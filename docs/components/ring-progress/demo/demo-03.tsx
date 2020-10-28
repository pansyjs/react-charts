import React from 'react';
import { RingProgress } from '@pansy/react-charts';
import { RingProgressConfig } from '@pansy/react-charts/es/ring-progress';

export default () => {
  const config: RingProgressConfig = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    progressStyle: ({ percent, type }) => {
      if (type === 'current') {
        return { fill: 'green' };
      }
      return { fill: '#999', lineDash: [1, 1], stroke: '#333' };
    }
  };

  return <RingProgress {...config} />;
};
