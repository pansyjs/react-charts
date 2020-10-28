import { Config } from '@walrus/cli';

const config: Config = {
  release: {
    buildCommand: 'build:lib'
  },
  entry: {
    ignore: [
      '.umi',
      '.umi-production',
      'common',
      'components',
      'hooks',
      'interface',
      'theme',
      'style',
      'locale'
    ]
  }
};

export default config;
