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
    colorField: 'Genre',
    color: [
      '#d62728',
      '#2ca02c',
      '#000000',
      '#9467bd',
      '#ffd500',
      '#1f77b4',
      '#00518a',
      '#ffbc69',
      '#9bd646'
    ],
    size: 4,
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } }
    },
    xAxis: {
      min: -100,
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } }
    },
    pointStyle: { stroke: '#fff' }
  };

  return <Scatter {...config} />;
};
