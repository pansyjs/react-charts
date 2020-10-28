import React from 'react';
import { Progress } from '@pansy/react-charts';
import { ProgressConfig } from '@pansy/react-charts/es/progress';

export default () => {
  const config: ProgressConfig = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    progressStyle: ({ percent, type }) => {
      if (type === 'current') {
        return { fill: 'green' };
      }
      return { fill: '#999', lineDash: [1, 1], stroke: '#333' };
    }
  };

  return <Progress {...config} />;
};
