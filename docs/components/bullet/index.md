---
title: Bullet 子弹图
order: 20
nav:
  title: 组件
  path: /component
group:
  title: 基本图表
  path: /basic
---

# Bullet 子弹图

用于表达数据从一个阶段到另一阶段逐步减少的过程。其中每个阶段的数据都表示为整体中的不同部分。 与饼图一样，“漏斗图”不使用任何轴。

漏斗的每个阶段代表总数的一部分。因此，它假定为漏斗形-第一阶段是最宽且最大的阶段。 显示的值按比例递减，总计总计为 100％。

### 基础水平方向子弹图

<code src="./demo/demo-01.tsx" />

### 基础垂直方向子弹图

<code src="./demo/demo-02.tsx" />

### 基础子弹图 - 带多颜色范围区间

<code src="./demo/demo-03.tsx" />

### 堆叠子弹图

<code src="./demo/demo-04.tsx" />

### 分组子弹图

<code src="./demo/demo-05.tsx" />

## API

文本链接的属性说明如下：

| 参数      | 说明                           | 类型          | 默认值 | 版本 |
| --------- | ------------------------------ | ------------- | ------ | ---- |
| className | 额外的样式类                   | string        | --     | --   |
| style     | 额外的样式(控制组件大小和颜色) | CSSProperties | --     | --   |
