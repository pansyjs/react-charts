---
title: React Charts
hero:
  title: React Charts
  desc: 基于 G2Plot 的高质量图表组件，为提效而生。
  actions:
    - text: 快速上手 →
      link: /guide/getting-started
features:
  - icon: https://gw.alipayobjects.com/zos/basement_prod/b54b48c7-087a-4984-b150-bcecb40920de/k7787z07_w114_h120.png
    title: 开箱即用
    desc: 内置优化后的默认配置，开箱即用。
  - icon: https://gw.alipayobjects.com/zos/basement_prod/201bea40-cf9d-4be2-a1d8-55bec136faf2/k7788a8s_w102_h120.png
    title: 高质量
    desc: 基于G2Plot封装，保证了组件的质量。
  - icon: https://gw.alipayobjects.com/zos/basement_prod/d078a5a9-1cb3-4352-9f05-505c2e98bc95/k7788v4b_w102_h126.png
    title: 高效率
    desc: 相比BizCharts，接入和学习成本低。
footer: SENSORO FE Team | Copyright © 2019-present
---

## 快速上手

```
# 安装依赖
$ yarn add @pansy/react-charts
```

```tsx | pure
import React from 'react';
import { Line } from '@pansy/react-charts';
import { LineConfig } from '@pansy/react-charts/es/line';

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

export default () => {
  const config: LineConfig = {
    data,
    xField: 'year',
    yField: 'value',
    smooth: true,
    meta: {
      value: {
        max: 15
      }
    }
  };

  return <Line {...config} />;
};
```
