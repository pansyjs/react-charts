import React, { FC } from 'react';
// @ts-ignore
import { Radar } from '@pansy/react-chart';

const data = [
  { item: 'Design', value: 70 },
  { item: 'Development', value: 60 },
  { item: 'Marketing', value: 60 },
  { item: 'Users', value: 40 },
  { item: 'Test', value: 60 },
  { item: 'Language', value: 70 },
  { item: 'Technology', value: 50 },
  { item: 'Support', value: 30 },
  { item: 'Sales', value: 60 },
  { item: 'UX', value: 50 }
];

const Example: FC = () => {
  return (
    <Radar
      data={data}
      angleField="item"
      radiusAxis={{
        grid: {
          alternateColor: ['rgba(0, 0, 0, 0.04)', null]
        }
      }}
    />
  );
};

export default Example;
