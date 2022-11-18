import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'core/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = () => (
  <div>
    <Logo width={100} height={100} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
