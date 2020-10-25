import React, { FC } from 'react';
import { Progress } from '@pansy/react-charts';

const Example: FC = () => {
  const config = {
    width: 200,
    height: 50,
    percent: 0.3,
    color: ['#F4664A', '#E8EDF3']
  };

  return <Progress {...config} />;
};

export default Example;
