import React, { FC } from 'react';
// @ts-ignore
import { Liquid } from '@pansy/react-charts';

const Example: FC = () => {
  return (
    <Liquid
      min={0}
      max={10000}
      value={5639}
      statistic={{
        formatter: (value: number) => ((100 * value) / 10000).toFixed(1) + '%'
      }}
    />
  );
};

export default Example;
