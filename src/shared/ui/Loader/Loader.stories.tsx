import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Meta, StoryObj } from '@storybook/react/*'

const meta = {
		title: 'shared/Loader',
		component: Loader,
		
		tags: ['autodocs'],
	} satisfies Meta<typeof Loader>;
	
	export default meta;
	type Story = StoryObj<typeof meta>;


export const Normal:Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)]
};
