import React, { useState, useEffect } from 'react';
import { Histogram } from '@pansy/react-charts';
import { HistogramConfig } from '@pansy/react-charts/es/histogram';

const DemoHistogram: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: HistogramConfig = {
    data,
    binField: 'depth',
    binWidth: 2,
    stackField: 'cut',
    coloField: 'color',
    tooltip: {
      showMarkers: false,
      position: 'top'
    },
    interactions: [{ type: 'element-highlight' }]
  };

  return <Histogram {...config} />;
};

export default DemoHistogram;
