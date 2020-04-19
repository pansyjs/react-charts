<h1 align="center">react-charts</h1>

> 基于 [G2Plot](https://github.com/antvis/G2Plot) 封装的图表库

## ✨ 特性

- 💻 使用 TypeScript 构建，提供完整的类型定义文件

## 🏗 安装

```
// npm 安装
npm install --save @pansy/react-charts

// yarn 安装
yarn add @pansy/react-charts
```

## 🔨 使用

```
import React, { FC } from 'react';
import { Line } from '@pansy/react-charts';

const App: FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    title: {
      visible: true,
      text: '我是标题',
    },
  };

  return (
    <Line {...config} />
  );
};

export default App;
```
