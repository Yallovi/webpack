import { ReactRenderer } from '@storybook/react/*'
import { PartialStoryFn } from 'storybook/internal/types'

export type Story = PartialStoryFn<ReactRenderer, { [x: string]: unknown}>