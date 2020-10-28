import React from 'react';
import { Bar } from '@pansy/react-charts';
import { BarConfig } from '@pansy/react-charts/es/bar';

const data = [
  { type: '分类一', values: [76, 100] },
  { type: '分类二', values: [56, 108] },
  { type: '分类三', values: [38, 129] },
  { type: '分类四', values: [58, 155] },
  { type: '分类五', values: [45, 120] },
  { type: '分类六', values: [23, 99] },
  { type: '分类七', values: [18, 56] },
  { type: '分类八', values: [18, 34] }
];

export default () => {
  const config: BarConfig = {
    data: data.reverse(),
    xField: 'values',
    yField: 'type',
    isRange: true
  };

  return <Bar {...config} />;
};
