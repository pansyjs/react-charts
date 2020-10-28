import React from 'react';
import { Progress } from '@pansy/react-charts';
import { ProgressConfig } from '@pansy/react-charts/es/progress';

export default () => {
  const config: ProgressConfig = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    progressStyle: {
      stroke: 'grey',
      lineDash: [4, 4],
      lineWidth: 1
    }
  };

  return <Progress {...config} />;
};
