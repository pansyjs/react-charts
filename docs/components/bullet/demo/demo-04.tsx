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
      range: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
      measure: ['#5B8FF9', '#5AD8A6'],
      target: '#5B8FF9'
    },
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#fff'
        }
      }
    },
    xAxis: {
      line: null
    },
    yAxis: false,
    tooltip: {
      showMarkers: false,
      shared: true
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '差',
          name: '差',
          marker: { symbol: 'square', style: { fill: '#FFB1AC', r: 5 } }
        },
        {
          value: '良',
          name: '良',
          marker: { symbol: 'square', style: { fill: '#FFDBA2', r: 5 } }
        },
        {
          value: '优',
          name: '优',
          marker: { symbol: 'square', style: { fill: '#B4EBBF', r: 5 } }
        },
        {
          value: '第一季度',
          name: '第一季度',
          marker: { symbol: 'square', style: { fill: '#5B8FF9', r: 5 } }
        },
        {
          value: '第二季度',
          name: '第二季度',
          marker: { symbol: 'square', style: { fill: ' #5AD8A6', r: 5 } }
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
