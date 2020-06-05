import React, { FC, useState, useEffect } from 'react';
import { Line } from '@pansy/react-charts';
import { LineProps } from '@pansy/react-charts/es/line';

const Example: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24KjfUOgRYa/GDP.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: LineProps = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    xAxis: {
      type: 'time',
      label: {
        visible: true,
        autoHide: true
      }
    },
    yAxis: { formatter: (v: number) => `${(v / 1000000000).toFixed(1)} B` } as any,
    legend: { visible: false },
    label: {
      visible: true,
      type: 'line'
    },
    animation: { appear: { animation: 'clipingWithData' } },
    smooth: true
  };

  return <Line {...config} />;
};

export default Example;
