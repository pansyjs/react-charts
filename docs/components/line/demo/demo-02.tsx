/**
 * title: 单折线图的基础用法
 * desc: 最基础简单的折线图使用方式，显示一个指标的趋势
 */
import React from 'react';
import { Line } from '@pansy/react-charts';
import { LineConfig } from '@pansy/react-charts/es/line';

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 }
];

export default () => {
  const config: LineConfig = {
    data,
    xField: 'year',
    yField: 'value',
    smooth: true,
    meta: {
      value: {
        max: 15
      }
    }
  };

  return <Line {...config} />;
};
