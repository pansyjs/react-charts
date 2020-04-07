import React, { FC } from 'react';
import { Dount } from '@pansy/react-charts';

const data = [
  {
    type: '分类一',
    value: 27
  },
  {
    type: '分类二',
    value: 25
  },
  {
    type: '分类三',
    value: 18
  },
  {
    type: '分类四',
    value: 15
  },
  {
    type: '分类五',
    value: 10
  },
  {
    type: '其它',
    value: 5
  }
];

const Example: FC = () => {
  return (
    <div>
      <Dount data={data} colorField="type" />
    </div>
  );
};

export default Example;