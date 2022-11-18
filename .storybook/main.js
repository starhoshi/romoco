const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    "storybook-addon-next",
  ],
  "staticDirs": [{ from: '../public', to: '/' }],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal(config) {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')]

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    const newConfig = {
      ...config,
      module: {
        ...config.module,
        rules: [...(config.module.rules || [])],
      },
    }

    newConfig.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.module\.css$/

    newConfig.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        'postcss-loader',
      ],
    })

    return newConfig
  },
}
