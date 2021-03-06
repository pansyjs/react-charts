import React, { useEffect, useRef } from 'react';
import { Pie } from '@pansy/react-charts';
import { PieConfig } from '@pansy/react-charts/es/pie';

const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '其他', value: 5 }
];

export default () => {
  const ref: PieConfig['chartRef'] = useRef();

  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      // @ts-ignore
      offset: '-0.5',
      content: '{name} {percentage}',
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center'
      }
    },
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65
        }
      }
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }]
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.setState('active', (data: any) => data.type === '分类一');
      ref.current.setState(
        'selected',
        (data: any) => data.type === '分类一' || data.type === '分类二'
      );
    }
  }, []);

  return <Pie chartRef={ref} {...config} />;
};
