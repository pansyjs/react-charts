import React from 'react';
import { TinyLine } from '@pansy/react-charts';
import { TinyLineConfig } from '@pansy/react-charts/es/tiny-line';

export default () => {
  const config: TinyLineConfig = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    tooltip: false,
    lineStyle: () => {
      return {
        stroke: 'green',
        lineWidth: 1
      };
    }
  };
  return <TinyLine {...config} />;
};
