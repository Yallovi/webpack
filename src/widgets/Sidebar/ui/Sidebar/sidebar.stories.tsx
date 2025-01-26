import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Sidebar } from './sidebar'


const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: 'Primary button'
    },
};

export const Dark: Story = {
    args: {
        children: 'Text',
        theme: Theme.DARK
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
