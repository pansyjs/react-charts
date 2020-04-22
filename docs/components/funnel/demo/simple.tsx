import React, { FC } from 'react';
// @ts-ignore
import { Funnel } from '@pansy/react-charts';

const data = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付', pv: 15000 },
  { action: '成交', pv: 8500 }
];

const Example: FC = () => {
  return <Funnel data={data} xField="action" yField="pv" />;
};

export default Example;
