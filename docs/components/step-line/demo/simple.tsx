import React, { FC } from 'react';
// @ts-ignore
import { StepLine } from '@pansy/react-charts';

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 }
];
const Example: FC = () => {
  return (
    <StepLine
      data={data}
      xField="year"
      meta={{
        type: {
          alias: '类别'
        },
        value: {
          alias: '销售额(万)'
        }
      }}
    />
  );
};

export default Example;
