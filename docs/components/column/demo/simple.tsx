import React, { FC } from 'react';
// @ts-ignore
import { Column } from '@pansy/react-chart';

const data = [
  { type: '家具家电', value: 38 },
  { type: '粮油副食', value: 52 },
  { type: '生鲜水果', value: 61 },
  { type: '美容洗护', value: 145 },
  { type: '母婴用品', value: 48 },
  { type: '进口食品', value: 38 },
  { type: '食品饮料', value: 38 },
  { type: '家庭清洁', value: 38 }
];

const Example: FC = () => {
  return (
    <Column
      data={data}
      xField="type"
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
