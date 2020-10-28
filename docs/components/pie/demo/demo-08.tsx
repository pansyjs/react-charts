import React from 'react';
import { Pie } from '@pansy/react-charts';
import { PieConfig } from '@pansy/react-charts/es/pie';

const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '其他', value: 5 }
];

export default () => {
  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: -35,
      autoRotate: false,
      content: '{value}',
      style: {
        fill: '#333',
        stroke: '#fff',
        strokeWidth: 1
      }
    },
    statistic: { title: { formatter: () => '总计' } },
    interactions: [{ type: 'pie-statistic-active' }]
  };

  return <Pie {...config} />;
};
