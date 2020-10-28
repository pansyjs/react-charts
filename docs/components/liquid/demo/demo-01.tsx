import React from 'react';
import { Liquid } from '@pansy/react-charts';
import { LiquidConfig } from '@pansy/react-charts/es/liquid';

export default () => {
  const config: LiquidConfig = { percent: 0.75 };

  return <Liquid {...config} />;
};
