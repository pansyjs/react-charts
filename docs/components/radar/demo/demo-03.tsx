import React, { useState, useEffect } from 'react';
import { Radar } from '@pansy/react-charts';
import { RadarConfig } from '@pansy/react-charts/es/radar';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/5c41aa9b-9c8a-425f-9f4d-934b889bb75d.json')
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
    seriesField: 'user',
    xAxis: {
      label: { offset: 15 },
      grid: { line: { type: 'line' } }
    },
    yAxis: { grid: { line: { type: 'circle' } } },
    point: { shape: 'circle' },
    area: {},
    legend: { position: 'bottom' }
  };

  return <Radar {...config} />;
};
