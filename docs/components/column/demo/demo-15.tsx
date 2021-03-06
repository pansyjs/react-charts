import React from 'react';
import { Column } from '@pansy/react-charts';
import { ColumnConfig } from '@pansy/react-charts/es/column';

export default () => {
  const data = [
    {
      type: '分类一',
      values: [76, 100]
    },
    {
      type: '分类二',
      values: [56, 108]
    },
    {
      type: '分类三',
      values: [38, 129]
    },
    {
      type: '分类四',
      values: [58, 155]
    },
    {
      type: '分类五',
      values: [45, 120]
    },
    {
      type: '分类六',
      values: [23, 99]
    },
    {
      type: '分类七',
      values: [18, 56]
    },
    {
      type: '分类八',
      values: [18, 34]
    }
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'values',
    color: 'l(90) 0:#3e5bdb 1:#b4d9e4',
    isRange: true,
    columnStyle: { fillOpacity: 0.8 },
    label: {
      position: 'middle',
      style: { fill: '#fff' }
    }
  };
  return <Column {...config} />;
};
