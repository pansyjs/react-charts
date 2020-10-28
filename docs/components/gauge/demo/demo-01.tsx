import React from 'react';
import { Gauge } from '@pansy/react-charts';
import { GaugeConfig } from '@pansy/react-charts/es/gauge';

export default () => {
  const config: GaugeConfig = {
    percent: 0.65,
    range: { color: ['l(0) 0:#5d7cef 1:#e35767'] }
  };

  return <Gauge {...config} />;
};
