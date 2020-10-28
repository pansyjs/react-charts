import React from 'react';
import { TinyColumn } from '@pansy/react-charts';
import { TinyColumnConfig } from '@pansy/react-charts/es/tiny-column';

export default () => {
  const config: TinyColumnConfig = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    columnStyle: {
      fill: '#222'
    }
  };

  return <TinyColumn {...config} />;
};
