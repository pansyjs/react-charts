import React from 'react';
import { Bar } from '@pansy/react-charts';
import { BarConfig } from '@pansy/react-charts/es/bar';

const data = [
  { action: '完成交易', pv: 8500 },
  { action: '支付订单', pv: 15000 },
  { action: '生成订单', pv: 25000 },
  { action: '放入购物车', pv: 35000 },
  { action: '浏览网站', pv: 50000 }
];

export default () => {
  const config: BarConfig = {
    data,
    xField: 'pv',
    yField: 'action',
    conversionTag: {}
  };
  return <Bar {...config} />;
};
