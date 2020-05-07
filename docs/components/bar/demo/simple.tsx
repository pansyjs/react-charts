import React, { FC } from 'react';
// @ts-ignore
import { Bar } from '@pansy/react-charts';

const data = [
  { 地区: '华东', 销售额: 4684506.442 },
  { 地区: '中南', 销售额: 4137415.0929999948 },
  { 地区: '东北', 销售额: 2681567.469000001 },
  { 地区: '华北', 销售额: 2447301.017000004 },
  { 地区: '西南', 销售额: 1303124.508000002 },
  { 地区: '西北', 销售额: 815039.5959999998 }
];

const Example: FC = () => {
  return (
    <Bar
      data={data}
      xField="销售额"
      yField="地区"
      label={{
        visible: true,
        formatter: (v: number) => Math.round(v / 10000) + '万'
      }}
    />
  );
};

export default Example;