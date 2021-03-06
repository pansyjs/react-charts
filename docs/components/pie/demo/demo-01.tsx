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
    label: {
      type: 'inner',
      // @ts-ignore 偏移 50% TODO 后续支持直接配置 -50%
      offset: '-0.5',
      content: '{name} {percentage}',
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center'
      }
    }
  };

  return <Pie {...config} />;
};
