---
title: Area 面积图
order: 5
nav:
  title: 组件
  path: /component
  order: 2
group:
  title: 基本图表
  path: /basic
---

# Area 面积图

面积图又叫区域图。 它是在折线图的基础之上形成的，它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。

面积图用于强调数量随时间而变化的程度，也可用于引起人们对总值趋势的注意。他们最常用于表现趋势和关系，而不是传达特定的值。

### 基础面积图

<code src="./demo/demo-01.tsx" />

### 渐变色面积图

<code src="./demo/demo-02.tsx" />

### 缩略轴面积图

<code src="./demo/demo-03.tsx" />

### 带中位线标注的基础面积图

<code src="./demo/demo-04.tsx" />

### 堆叠面积图

<code src="./demo/demo-05.tsx" />

### 二氧化碳排放量来源

<code src="./demo/demo-06.tsx" />

### 带缩略轴堆叠面积图

<code src="./demo/demo-07.tsx" />

## API

文本链接的属性说明如下：

| 参数      | 说明                           | 类型          | 默认值 | 版本 |
| --------- | ------------------------------ | ------------- | ------ | ---- |
| className | 额外的样式类                   | string        | --     | --   |
| style     | 额外的样式(控制组件大小和颜色) | CSSProperties | --     | --   |
