import React, { FC } from 'react';
// @ts-ignore
import { Liquid } from '@pansy/react-chart';

const Example: FC = () => {
  return <Liquid min={0} max={10000} value={5639} />;
};

export default Example;
