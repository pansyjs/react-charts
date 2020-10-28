import React, { useState, useEffect } from 'react';
import { WordCloud } from '@pansy/react-charts';
import { WordCloudConfig } from '@pansy/react-charts/es/word-cloud';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: WordCloudConfig = {
    data,
    width: 600,
    height: 400,
    wordField: 'name',
    weightField: 'value',
    colorField: 'value',
    imageMask:
      'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32]
    }
  };
  return <WordCloud {...config} />;
};
