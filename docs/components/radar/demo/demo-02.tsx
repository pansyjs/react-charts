import React, { useState, useEffect } from 'react';
import { Radar } from '@pansy/react-charts';
import { RadarConfig } from '@pansy/react-charts/es/radar';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/bda695a8-cd9f-4b78-a423-3d6d547c10c3.json')
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
    point: {}
  };
  return <Radar {...config} />;
};
