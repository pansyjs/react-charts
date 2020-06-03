/**
 * title: 单折线图的基础用法
 * desc: 最基础简单的折线图使用方式，显示一个指标的趋势
 */

import React, { FC } from 'react';
// @ts-ignore
import { Line } from '@pansy/react-charts';

const data = [
  { date: '2020-04-01', value: 3 },
  { date: '2020-04-02', value: 4 },
  { date: '2020-04-03', value: 3.5 },
  { date: '2020-04-04', value: 5 },
  { date: '2020-04-05', value: 4.9 },
  { date: '2020-04-06', value: 6 },
  { date: '2020-04-07', value: 7 }
];

const Example: FC = () => {
  return (
    <div>
      <Line data={data} xField="date" />
    </div>
  );
};

export default Example;
