---
title: Line 基础折线图
nav:
  title: 组件
  path: /component
group:
  title: 折线图
  path: /line
---

# Line 基础折线图

折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式：是上升还是下降，是否存在周期性的循环？因此，相对于独立的数据点，折线图关注的是全局趋势。

在折线图中，一般水平轴（X 轴）用来表示时间的推移，并且间隔相同；而垂直轴（Y 轴）代表不同时刻的数据的大小。

## 代码演示

### 基础折线图

<code src="./demo/demo-01.tsx" />

### 曲线折线图

<code src="./demo/demo-02.tsx" />

### 配置折线数据点样式

<code src="./demo/demo-03.tsx" />

### 带缩略轴的折线

<code src="./demo/demo-04.tsx" />

### 折线图辅助线

<code src="./demo/demo-05.tsx" />

### 折线图线条颜色变化

<code src="./demo/demo-06.tsx" />

### 阶梯折线图

<code src="./demo/demo-07.tsx" />

### 多阶梯折线图

<code src="./demo/demo-08.tsx" />

### 多折线图

<code src="./demo/demo-09.tsx" />

### 二氧化碳排放量来源

<code src="./demo/demo-10.tsx" />

### 多折线动画

<code src="./demo/demo-11.tsx" />

### 指定折线颜色

<code src="./demo/demo-12.tsx" />

### 通过回调函数指定折线颜色

<code src="./demo/demo-13.tsx" />

### 指定折线样式

<code src="./demo/demo-14.tsx" />

### 指定 point marker 激活的样式

<code src="./demo/demo-15.tsx" />

## API

### 数据映射

| 参数        | 说明                                             | 类型     | 默认值  | 版本 |
| ----------- | ------------------------------------------------ | -------- | ------- | ---- |
| data        | 设置图表数据源                                   | object[] | --      | --   |
| meta        | 全局化配置图表数据元信息，以字段为单位进行配置。 | object   | --      | --   |
| xField      | 折线形状在 x 方向（横向延伸）对应的数据字段名    | string   | --      | --   |
| yField      | 折线形状在 y 方向对应的数据字段名                | string   | `value` | --   |
| seriesField | 多折线必选。 数据集中的分组字段名                | string   | --      | --   |

**meta**

| 参数      | 说明                                        | 类型     | 默认值 | 版本 |
| --------- | ------------------------------------------- | -------- | ------ | ---- |
| alias     | 字段的别名                                  | string   | --     | --   |
| formatter | callback 方法，对该字段所有值进行格式化处理 | function | --     | --   |
| values    | 枚举该字段下所有值                          | string[] | --     | --   |
| range     | 字段的数据映射区间                          | number[] | [0, 1] | --   |

### 图形样式

| 参数      | 说明                 | 类型                 | 默认值 | 版本 |
| --------- | -------------------- | -------------------- | ------ | ---- |
| color     | 指定折线颜色         | string[] \| Function | --     | --   |
| lineSize  | 设置折线宽度         | number               | 2      | --   |
| lineStyle | 设置折线样式         | object               | --     | --   |
| smooth    | 是否将折线绘制为曲线 | boolean              | false  | --   |
| point     | 配置折线上的点       | object               | --     | --   |

**lineStyle**

| 参数      | 说明     | 类型   | 默认值 | 版本 |
| --------- | -------- | ------ | ------ | ---- |
| stroke    | 折线颜色 | string | --     | --   |
| lineWidth | 线宽     | number | --     | --   |
| lineDash  | 虚线显示 | number | --     | --   |
| opacity   | 透明度   | number | [0, 1] | --   |
