import { join } from 'path';

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
        children: ['/components/line']
      }
    ]
  },
  dynamicImport: {},
  hash: true
};
