import React from 'react';
import { Pie } from '@pansy/react-charts';
import { PieConfig } from '@pansy/react-charts/es/pie';

const data = [
  { sex: '男', sold: 0.45 },
  { sex: '女', sold: 0.55 }
];

export default () => {
  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'sold',
    colorField: 'sex',
    radius: 0.8,
    legend: false,
    label: {
      type: 'inner',
      // @ts-ignore
      offset: '-0.5',
      style: {
        fill: '#fff',
        fontSize: 18,
        textAlign: 'center'
      }
    },
    pieStyle: ({ sex }) => {
      if (sex === '男') {
        return { fill: 'p(a)https://gw.alipayobjects.com/zos/rmsportal/nASTPWDPJDMgkDRlAUmw.jpeg' };
      }
      return { fill: 'p(a)https://gw.alipayobjects.com/zos/rmsportal/ziMWHpHSTlTzURSzCarw.jpeg' };
    }
  };

  return <Pie {...config} />;
};
