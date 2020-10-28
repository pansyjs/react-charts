import React, { FC } from 'react';
import { TinyColumn } from '@pansy/react-charts';

const Example: FC = () => {
  const randomData = (num: number, max: number, min: number) => {
    const data = [];
    for (let i = 0; i < num; i++) {
      data.push({ index: String(i), value: min + Math.random() * (max - min) });
    }
    return data;
  };

  const config = {
    width: 200,
    height: 50,
    data: randomData(50, 10, 1000),
    xField: 'index',
    guideLine: [
      {
        type: 'median',
        text: {
          position: 'start',
          content: '中位数',
          style: {
            stroke: 'white',
            lineWidth: 2
          }
        }
      }
    ]
  };

  return <TinyColumn {...config} />;
};

export default Example;
