import React, { FC, useState, useEffect } from 'react';
// @ts-ignore
import { Heatmap } from '@pansy/react-charts';

const Example: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    forceFit: false,
    width: 650,
    height: 500,
    data,
    xField: 'Month of Year',
    yField: 'District',
    colorField: 'AQHI',
    shapeType: 'rect',
    color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
    meta: { 'Month of Year': { type: 'cat' } }
  };

  return <Heatmap {...config} />;
};

export default Example;
