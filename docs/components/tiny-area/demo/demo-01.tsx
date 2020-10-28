import React from 'react';
import { TinyArea } from '@pansy/react-charts';
import { TinyAreaConfig } from '@pansy/react-charts/es/tiny-area';

export default () => {
  const config: TinyAreaConfig = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    tooltip: { formatter: (x, y) => `NO.${x}: ${y.toFixed(2)}` }
  };

  return <TinyArea {...config} />;
};
