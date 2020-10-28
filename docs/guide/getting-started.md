---
order: 1
nav:
  title: 指南
  order: 1
---

# 快速开始

## 安装

```bash
$ yarn add @pansy/react-charts
```

## 使用

大部分 demos 使用了父容器宽高，请确保父容器宽高或者手动设置图表宽高。

```tsx | pure
import React, { Component } from 'react';
import { Line } from '@pansy/react-charts';

class Page extends Component {
  render() {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 }
    ];

    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond'
      }
    };
    return <Line {...config} />;
  }
}
export default Page;
```

最终效果：

```tsx
import React from 'react';
import { Line } from '@pansy/react-charts';

export default () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 }
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond'
    }
  };
  return <Line {...config} />;
};
```
