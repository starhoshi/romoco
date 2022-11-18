import '../src/_core/styles/global.css'
import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { setConfig } from 'next/config'
import { publicRuntimeConfig } from '../next.config'
import * as NextImage from "next/image";

// https://panda-program.com/posts/nextjs-storybook-typescript-errors
setConfig({ publicRuntimeConfig })

// https://zenn.dev/minguu42/articles/20211226-nextjs-storybook
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const decorators = [
  (Story) => (
    <div id='decorators-root'>
      <Story />
    </div>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
