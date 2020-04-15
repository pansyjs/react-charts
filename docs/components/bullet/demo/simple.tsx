import React, { FC } from 'react';
// @ts-ignore
import { Bullet } from '@pansy/react-chart';

const data = [
  {
    title: '满意度',
    measures: [83],
    targets: [90]
  }
];

const Example: FC = () => {
  return <Bullet data={data} rangeMax={100} />;
};

export default Example;
