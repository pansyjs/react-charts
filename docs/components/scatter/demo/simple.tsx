import React, { FC, useState, useEffect } from 'react';
// @ts-ignore
import { Scatter } from '@pansy/react-charts';

const Example: FC = () => {
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

  return (
    <Scatter
      data={data}
      xField="Revenue (Millions)"
      yField="Rating"
      xAxis={{
        visible: true,
        min: -5
      }}
    />
  );
};
export default Example;
