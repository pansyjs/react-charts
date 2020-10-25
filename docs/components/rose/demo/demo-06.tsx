import React from 'react';
import { Rose } from '@pansy/react-charts';
import { RoseConfig } from '@pansy/react-charts/es/rose';

const data = [
  {
    type: '分类一',
    value: 27,
    user: '用户一'
  },
  {
    type: '分类二',
    value: 25,
    user: '用户一'
  },
  {
    type: '分类三',
    value: 18,
    user: '用户一'
  },
  {
    type: '分类四',
    value: 15,
    user: '用户一'
  },
  {
    type: '分类五',
    value: 10,
    user: '用户一'
  },
  {
    type: '其它',
    value: 5,
    user: '用户一'
  },
  {
    type: '分类一',
    value: 7,
    user: '用户二'
  },
  {
    type: '分类二',
    value: 5,
    user: '用户二'
  },
  {
    type: '分类三',
    value: 38,
    user: '用户二'
  },
  {
    type: '分类四',
    value: 5,
    user: '用户二'
  },
  {
    type: '分类五',
    value: 20,
    user: '用户二'
  },
  {
    type: '其它',
    value: 15,
    user: '用户二'
  }
];

export default () => {
  const config: RoseConfig = {
    data,
    xField: 'type',
    yField: 'value',
    isStack: true,
    seriesField: 'user',
    radius: 0.9,
    xAxis: { line: { style: { lineWidth: 0 } } },
    label: { offset: -15 },
    interactions: [{ type: 'element-active' }]
  };

  return <Rose {...config} />;
};
