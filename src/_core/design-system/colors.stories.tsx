import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { background, line, textColor } from './colors'

const ColorCards = ({ colors, name }: { name: string; colors: Record<string, string> }) => {
  return (
    <>
      <h3 style={{ marginBottom: '10px' }}>{name}</h3>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        {Object.entries(colors).map(([name, color]) => (
          <div key={name} style={{ border: 'solid 1px #ebebeb', padding: '8px', borderRadius: '12px' }}>
            <div style={{ backgroundColor: color, width: '240px', height: '150px', border: 'solid 1px #efefef', borderRadius: '12px' }} />
            <p style={{ fontSize: '15px' }}>{name}</p>
            <p style={{ fontSize: '13px', color: '#3c3c3c' }}>{color}</p>
          </div>
        ))}
      </div>
    </>
  )
}

const Template: ComponentStory<typeof ColorCards> = (args) => <ColorCards {...args} />

export const Background = Template.bind({})
Background.args = {
  name: 'Background',
  colors: background,
}

export const TextColor = Template.bind({})
TextColor.args = {
  name: 'TextColor',
  colors: textColor,
}

export const Line = Template.bind({})
Line.args = {
  name: 'Line',
  colors: line,
}

export default {
  title: 'design-system/color',
  component: ColorCards,
  parameters: {
    viewport: {
      viewports: {
        forDesignSystem: {
          name: 'for design system',
          styles: {
            height: '1000px',
            width: '1400px',
          },
          type: 'desktop',
        },
      },
      defaultViewport: 'forDesignSystem',
    },
  },
} as ComponentMeta<typeof ColorCards>
