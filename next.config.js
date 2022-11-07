const repository = '/romoco'
const urlPrefix = process.env.NODE_ENV === 'production' ? repository : ''

module.exports = {
  assetPrefix: process.env.GITHUB_ACTIONS && repository,
  basePath: process.env.GITHUB_ACTIONS && repository,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: { urlPrefix },
  reactStrictMode: true,
  swcMinify: true,
};
