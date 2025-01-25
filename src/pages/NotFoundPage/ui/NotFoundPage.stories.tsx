import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Meta, StoryObj } from '@storybook/react/*'

const meta = {
		title: 'pages/NotFoundPage',
		component: NotFoundPage,
		tags: ['autodocs'],
	} satisfies Meta<typeof NotFoundPage>;
	
	export default meta;
	type Story = StoryObj<typeof meta>;

export const Normal: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)]
}
