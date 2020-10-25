import React, { FC } from 'react';
import { Liquid } from '@pansy/react-charts';

const Example: FC = () => {
  return <Liquid min={0} max={10000} value={5639} />;
};

export default Example;
