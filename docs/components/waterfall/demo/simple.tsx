import React, { FC } from 'react';
// @ts-ignore
import { Waterfall } from '@pansy/react-charts';

const Example: FC = () => {
  const data = [
    { type: '日用品', money: 120 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬红包', money: -2000 }
  ];

  return (
    <Waterfall
      xField="type"
      yField="money"
      data={data}
      meta={{
        type: {
          alias: '类别'
        },
        money: {
          alias: '金额'
        }
      }}
    />
  );
};
export default Example;
