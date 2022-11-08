import Head from 'next/head'
import React from 'react'
import { assetsUrl } from 'lib/assets_url'

export const siteTitle = 'romoco'
export const description = "Makes App Store Connect's promotion codes available on camera."
export const shareTitle = `${siteTitle} - ${description}`
export const shareUrl = 'https://starhoshi.github.io/romoco'

type Props = {
  title?: string
}

export const Meta = ({ title = shareTitle }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href={assetsUrl('/favicon.ico')} />
      <meta name='description' content={description} />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:url' content={shareUrl} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta property='og:image' content='https://starhoshi.github.io/romoco/images/romoco.png' />
      <meta property='twitter:image' content='https://starhoshi.github.io/romoco/images/romoco.png' />
    </Head>
  )
}
