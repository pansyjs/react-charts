import React from 'react';
import { Column } from '@pansy/react-charts';
import { ColumnConfig } from '@pansy/react-charts/es/column';

const DemoColumn: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon'
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon'
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon'
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon'
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon'
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon'
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon'
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon'
    },
    {
      year: '1999',
      value: 13,
      type: 'Lon'
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor'
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor'
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor'
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor'
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor'
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor'
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor'
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor'
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor'
    }
  ];
  const config: ColumnConfig = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    color: ['#ae331b', '#1a6179'],
    label: {
      position: 'middle',
      layout: [{ type: 'interval-adjust-position' }, { type: 'adjust-color' }]
    }
  };
  return <Column {...config} />;
};

export default DemoColumn;
