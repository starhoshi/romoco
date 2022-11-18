import getConfig from 'next/config'

export function assetsUrl(filename: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { urlPrefix: string }
  }
  return publicRuntimeConfig.urlPrefix + filename
}
