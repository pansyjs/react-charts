import React from 'react';
import { Progress } from '@pansy/react-charts';
import { ProgressConfig } from '@pansy/react-charts/es/progress';

export default () => {
  const config: ProgressConfig = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    barWidthRatio: 0.1
  };

  return <Progress {...config} />;
};
