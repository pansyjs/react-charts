---
order: 0
nav:
  title: 组件
  order: 1
toc: menu
---

## 共有属性

### 图表容器配置

| 参数       | 说明                     | 类型              | 默认值   | 版本 |
| ---------- | ------------------------ | ----------------- | -------- | ---- |
| width      | 设置图表宽度。           | number            | 400      | --   |
| height     | 设置图表高度。           | number            | 400      | --   |
| forceFit   | 图表是否自适应容器宽高。 | boolean           | true     | --   |
| pixelRatio | 设置图表渲染的像素比     | number            | 2        | --   |
| renderer   | 设置图表渲染方式         | `svg` \| `canvas` | `canvas` | --   |

**注意：** 当 `forceFit` 设置为`true`时，`width` 和 `height` 的设置将失效
