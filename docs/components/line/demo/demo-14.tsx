import React, { useState, useEffect } from 'react';
import { Line } from '@pansy/react-charts';
import { LineConfig } from '@pansy/react-charts/es/line';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: LineConfig = {
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    legend: { position: 'right-top' },
    seriesField: 'type',
    color: ['#1979C9', '#D62A0D', '#FAA219'],
    lineStyle: ({ type }) => {
      if (type === 'register') {
        return {
          lineDash: [2, 2],
          opacity: 1
        };
      }
      return { opacity: 0.2 };
    }
  };
  return <Line {...config} />;
};
