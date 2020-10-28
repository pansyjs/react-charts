import React, { useState, useEffect } from 'react';
import { WordCloud } from '@pansy/react-charts';
import { WordCloudConfig } from '@pansy/react-charts/es/word-cloud';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/world-population.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: WordCloudConfig = {
    data,
    width: 600,
    height: 500,
    autoFit: false,
    wordField: 'x',
    weightField: 'value',
    color: '#6262ff',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [24, 80]
    }
  };
  return <WordCloud {...config} />;
};
