import React, { useState, useEffect } from 'react';
import { Radar } from '@pansy/react-charts';
import { RadarConfig } from '@pansy/react-charts/es/radar';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/a104a693-2dd0-4a71-a190-39ec88f7307c.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: RadarConfig = {
    data,
    xField: 'item',
    yField: 'score',
    meta: { score: { alias: '分数' } },
    xAxis: {
      line: null,
      tickLine: null,
      grid: { line: { style: { lineDash: null } } }
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: { lineDash: null }
        },
        alternateColor: 'rgba(0, 0, 0, 0.04)'
      }
    },
    point: {}
  };
  return <Radar {...config} />;
};
