export default {
  mode: 'site',
  title: 'React Chart',
  menus: {
    '/guide': [
      {
        title: '快速开始',
        path: '/guide/getting-started'
      }
    ],
    '/components': [
      {
        title: '图表',
        children: [
          '/components/line',
          '/components/area',
          '/components/pie',
          '/components/donut',
          '/components/column'
        ]
      }
    ]
  },
  dynamicImport: {},
  hash: true
};
