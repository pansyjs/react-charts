import React, { FC } from 'react';
// @ts-ignore
import { Dount } from '@pansy/react-charts';

const data = [
  { type: 'count', value: 19 },
  { type: 'total', value: 1 }
];

const Example: FC = () => {
  return (
    <div>
      <Dount
        data={data}
        width={56}
        height={56}
        radius={1}
        innerRadius={0.6}
        style={{
          display: 'inline-block'
        }}
        label={{ visible: false }}
        legend={{ visible: false }}
        padding={[0, 0, 0, 0]}
        statistic={
          {
            visible: false
          } as any
        }
      />

      <Dount
        data={data}
        width={56}
        height={56}
        radius={1}
        innerRadius={0.6}
        style={{
          display: 'inline-block'
        }}
        label={{ visible: false }}
        legend={{ visible: false }}
        padding={[0, 0, 0, 0]}
        statistic={
          {
            visible: false
          } as any
        }
      />
    </div>
  );
};

export default Example;
