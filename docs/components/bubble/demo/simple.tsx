import React, { useState, useEffect } from 'react';
// @ts-ignore
import { Bubble } from '@pansy/react-charts';

const Example: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/XMCQ4qsuPa/smoking-rate.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    pointSize: [4, 30],
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    xAxis: {
      visible: true,
      max: 5,
      min: -25
    }
  };

  return <Bubble {...config} />;
};
export default Example;
