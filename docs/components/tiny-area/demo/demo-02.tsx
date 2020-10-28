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
    lineStyle: {
      lineDash: [2, 2],
      stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'
    },
    areaStyle: { fill: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' }
  };

  return <TinyArea {...config} />;
};
