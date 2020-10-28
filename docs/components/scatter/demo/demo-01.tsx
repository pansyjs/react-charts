import React, { useState, useEffect } from 'react';
import { Scatter } from '@pansy/react-charts';
import { ScatterConfig } from '@pansy/react-charts/es/scatter';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: ScatterConfig = {
    appendPadding: 10,
    data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    yAxis: { line: { style: { stroke: '#aaa' } } },
    xAxis: {
      min: -100,
      nice: true,
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } }
    },
    pointStyle: { stroke: '#fff' }
  };

  return <Scatter {...config} />;
};
