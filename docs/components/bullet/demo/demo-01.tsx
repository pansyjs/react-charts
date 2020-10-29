/**
 * title: 单折线图的基础用法
 * desc: 最基础简单的折线图使用方式，显示一个指标的趋势
 */
import React from 'react';
import { Bullet } from '@pansy/react-charts';
import { BulletConfig } from '@pansy/react-charts/es/bullet';

const data = [
  {
    title: '满意度',
    ranges: [100],
    measures: [80],
    target: 85
  }
];

export default () => {
  const config: BulletConfig = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#5B8FF9',
      measure: '#5B8FF9',
      target: '#5B8FF9'
    },
    xAxis: {
      line: null
    },
    yAxis: false,
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '实际值',
          name: '实际值',
          marker: { symbol: 'square', style: { fill: '#5B8FF9', r: 5 } }
        },
        {
          value: '目标值',
          name: '目标值',
          marker: { symbol: 'line', style: { stroke: '#5B8FF9', r: 5 } }
        }
      ]
    }
  };

  return <Bullet {...config} />;
};
