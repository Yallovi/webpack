import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';
import { Meta, StoryObj } from '@storybook/react/*'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
  } satisfies Meta<typeof AppLink>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        to: "",
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        to: "",
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
};


export const Red: Story = {
    args: {
        to: "",
        children: 'Text',
        theme: AppLinkTheme.RED
    }
};


export const PrimaryDark: Story = {
    args: {
        to: "",
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        to: "",
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const RedDark: Story = {
    args: {
        to: "",
        children: 'Text',
        theme: AppLinkTheme.RED
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
