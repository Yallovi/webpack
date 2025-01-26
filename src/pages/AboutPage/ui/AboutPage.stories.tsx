import { Theme } from 'app/providers/ThemeProvider';
import { AboutPage } from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Meta, StoryObj } from '@storybook/react/*'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;
	
export default meta;
	type Story = StoryObj<typeof meta>;

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
