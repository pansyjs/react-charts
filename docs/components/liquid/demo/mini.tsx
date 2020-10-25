import React, { FC } from 'react';
import { Liquid } from '@pansy/react-charts';

const Example: FC = () => {
  return (
    <div>
      <Liquid
        min={0}
        max={10000}
        value={5639}
        height={160}
        width={160}
        style={{
          display: 'inline-block'
        }}
      />
      <Liquid
        min={0}
        max={10000}
        value={5639}
        height={160}
        width={160}
        style={{
          display: 'inline-block'
        }}
      />
      <Liquid
        min={0}
        max={10000}
        value={5639}
        height={160}
        width={160}
        style={{
          display: 'inline-block'
        }}
      />
    </div>
  );
};

export default Example;
