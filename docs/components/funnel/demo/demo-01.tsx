/**
 * title: 单折线图的基础用法
 * desc: 最基础简单的折线图使用方式，显示一个指标的趋势
 */
import React from 'react';
import { Funnel } from '@pansy/react-charts';
import { FunnelConfig } from '@pansy/react-charts/es/funnel';

const data = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付', pv: 15000 },
  { action: '成交', pv: 8500 }
];

export default () => {
  const config: FunnelConfig = {
    data: data,
    xField: 'action',
    yField: 'pv'
  };

  return <Funnel {...config} />;
};
