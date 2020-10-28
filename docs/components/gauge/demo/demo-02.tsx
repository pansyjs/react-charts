import React from 'react';
import { Gauge } from '@pansy/react-charts';
import { GaugeConfig } from '@pansy/react-charts/es/gauge';

export default () => {
  const config: GaugeConfig = {
    percent: 0.75,
    range: {
      ticks: [0, 0.2, 0.4, 0.75, 1],
      color: ['red', 'yellow', 'green']
    },
    indicator: {
      pointer: {
        style: {
          stroke: 'pink'
        }
      },
      pin: {
        style: {
          stroke: 'blue'
        }
      }
    },
    axis: {
      label: {
        formatter(v: string) {
          return Number(v) * 100;
        }
      },
      subTickLine: {
        count: 3
      }
    },
    statistic: {
      content: {
        formatter: ({ percent }: any) => `分数：${percent * 100}`
      }
    }
  };
  return <Gauge {...config} />;
};
