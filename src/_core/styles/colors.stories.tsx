import React, { CSSProperties } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const background = ['--color-background-default', '--color-background-code']
const line = ['--color-line-code']
const text = ['--color-text-primary', '--color-text-sub']

const ColorCards = ({ colors, name }: { name: string; colors: string[] }) => {
  return (
    <>
      <h3 style={{ marginBottom: '10px' }}>{name}</h3>
      <div style={containerStyle}>
        {colors.map((color) => (
          <div key={name} style={cardStyle}>
            <div style={colorStyle(color)} />
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
  colors: text,
}

export const Line = Template.bind({})
Line.args = {
  name: 'Line',
  colors: line,
}

const containerStyle: CSSProperties = { display: 'flex', flexDirection: 'row', gap: '20px' }
const cardStyle: CSSProperties = { border: 'solid 1px #ebebeb', padding: '8px', borderRadius: '12px' }
const colorStyle = (color: string): CSSProperties => {
  return { backgroundColor: `var(${color})`, width: '240px', height: '150px', border: 'solid 1px #efefef', borderRadius: '12px' }
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
