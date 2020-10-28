import React from 'react';
import { Liquid } from '@pansy/react-charts';
import { LiquidConfig } from '@pansy/react-charts/es/liquid';

export default () => {
  const config: LiquidConfig = {
    percent: 0.75,
    statistic: {
      content: {
        formatter: ({ percent }) => {
          return `占比${percent * 100}%`;
        }
      }
    },
    liquidStyle: ({ percent }) => {
      return { fill: percent > 0.75 ? 'red' : '#acc9ff' };
    },
    color: () => '#acc9ff'
  };

  return <Liquid {...config} />;
};
