/**
 * title: 带数据点的折线图
 * desc: 将折线图上的每一个数据点显示出来，作为辅助阅读。
 */
import React, { FC } from 'react';
// @ts-ignore
import { Line } from '@pansy/react-charts';

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

const Example: FC = () => {
  return (
    <div>
      <Line
        data={data}
        xField="year"
        smooth
        point={{
          visible: true,
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#2593fc',
            lineWidth: 2
          }
        }}
        label={{
          visible: true,
          type: 'point'
        }}
      />
    </div>
  );
};

export default Example;
