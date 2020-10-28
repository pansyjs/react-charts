import React from 'react';
import { Column } from '@pansy/react-charts';
import { ColumnConfig } from '@pansy/react-charts/es/column';

const data = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付订单', pv: 15000 },
  { action: '完成交易', pv: 8500 }
];

export default () => {
  const config: ColumnConfig = {
    data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {}
  };
  return <Column {...config} />;
};
