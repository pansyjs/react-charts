---
title: Stock 股票图
nav:
  title: 组件
  path: /component
group:
  title: 基本图表
  path: /basic
---

# Stock 股票图

迷你图表通常在空间有限的情况下作为 fullsize chart 的降级显示形式，相比于 fullsize chart，迷你图表省略了轴和图例，标题，标签等组件，而只保留了图表图形的基本态势。因此展现的信息量是有限的。通常，迷你图表会搭配表格进行使用。

## 代码演示

### 基础蜡烛图

<code src="./demo/demo-01.tsx" />

## API

文本链接的属性说明如下：

| 参数      | 说明                           | 类型          | 默认值 | 版本 |
| --------- | ------------------------------ | ------------- | ------ | ---- |
| className | 额外的样式类                   | string        | --     | --   |
| style     | 额外的样式(控制组件大小和颜色) | CSSProperties | --     | --   |
