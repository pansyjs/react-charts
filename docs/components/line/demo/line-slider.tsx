/**
 * title: 为折线添加缩略轴交互
 * desc: 缩略轴 (slider) 交互适用于折线数据较多\uFF0C用户希望关注数据集中某个特殊区间的场景\u3002
 */
import React, { FC, useState, useEffect } from 'react';
// @ts-ignore
import { Line } from '@pansy/react-charts';

const Example: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qRZUAgaEYC/sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    padding: 'auto',
    data,
    xField: '城市',
    xAxis: {
      visible: true,
      label: { autoHide: true }
    },
    yField: '销售额',
    yAxis: {
      label: { formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) }
    },
    interactions: [
      {
        type: 'slider',
        cfg: {
          start: 0.1,
          end: 0.2
        }
      }
    ]
  };

  return <Line {...config} />;
};

export default Example;
