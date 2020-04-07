export default {
  mode: 'site',
  title: 'React Charts',
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
        children: ['/components/line', 'components/area']
      }
    ]
  },
  dynamicImport: {},
  hash: true
};
