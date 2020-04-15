import React, { FC } from 'react';
// @ts-ignore
import { Calendar } from '@pansy/react-chart';

const data = [
  { date: '2017-05-01', commits: 1, month: 4, day: 1, week: '0' },
  { date: '2017-05-02', commits: 1, month: 4, day: 2, week: '0' },
  { date: '2017-05-03', commits: 1, month: 4, day: 3, week: '0' },
  { date: '2017-05-04', commits: 1, month: 4, day: 4, week: '0' },
  { date: '2017-05-05', commits: 1, month: 4, day: 5, week: '0' },
  { date: '2017-05-06', commits: 1, month: 4, day: 6, week: '0' },
  { date: '2017-05-07', commits: 1, month: 4, day: 0, week: '1' },
  { date: '2017-05-08', commits: 1, month: 4, day: 1, week: '1' },
  { date: '2017-05-09', commits: 1, month: 4, day: 2, week: '1' },
  { date: '2017-05-10', commits: 1, month: 4, day: 3, week: '1' },
  { date: '2017-05-11', commits: 1, month: 4, day: 4, week: '1' },
  { date: '2017-05-12', commits: 1, month: 4, day: 5, week: '1' },
  { date: '2017-05-13', commits: 1, month: 4, day: 6, week: '1' },
  { date: '2017-05-14', commits: 1, month: 4, day: 0, week: '2' },
  { date: '2017-05-15', commits: 1, month: 4, day: 1, week: '2' },
  { date: '2017-05-16', commits: 1, month: 4, day: 2, week: '2' },
  { date: '2017-05-17', commits: 1, month: 4, day: 3, week: '2' },
  { date: '2017-05-18', commits: 1, month: 4, day: 4, week: '2' },
  { date: '2017-05-19', commits: 1, month: 4, day: 5, week: '2' },
  { date: '2017-05-20', commits: 1, month: 4, day: 6, week: '2' },
  { date: '2017-05-21', commits: 1, month: 4, day: 0, week: '3' },
  { date: '2017-05-22', commits: 1, month: 4, day: 1, week: '3' },
  { date: '2017-05-23', commits: 1, month: 4, day: 2, week: '3' },
  { date: '2017-05-24', commits: 1, month: 4, day: 3, week: '3' }
];

const Example: FC = () => {
  return (
    <Calendar
      data={data}
      height={300}
      dateField="date"
      valueField="commits"
      dateRange={['2017-05-01', '2017-10-31']}
      colors="#BAE7FF-#1890FF-#0050B3"
    />
  );
};

export default Example;
